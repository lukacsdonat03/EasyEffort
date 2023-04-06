const { StatusCodes } = require("http-status-codes");
const sequelize = require("../database/databaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const initModels = require("../models/init-models");

const models = initModels(sequelize);

const User = models.user;

const register = async (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;
  if (!fullname || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("All credentials are required!");
  }
  //check the email
  User.findOne({ where: { email: email } }).then((response) => {
    if (response) {
      return res
        .status(StatusCodes.CONFLICT)
        .send("This email is already registered.");
    }
  }); 

  //password hash
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  //actual register query
  try {
    const newUser = await User.create({
      fullname: fullname,
      email: email,
      password: hash,
    });
    return res.status(StatusCodes.CREATED).send(newUser);
  } catch (error) {
    return res.send(StatusCodes.INTERNAL_SERVER_ERROR,error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send("There is no user registered with this email.");
      }
      const isCorrectPassword = bcrypt.compareSync(password, user.password);

      if (!isCorrectPassword) {
        return res.status(StatusCodes.BAD_REQUEST).send("Invalid credentials!");
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(StatusCodes.OK)
        .send({ email: user.email, isAdmin: user.admin });
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error: ", err);
    });
};

const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(StatusCodes.OK)
    .send("User has been logged out.");
};

module.exports = {
  register,
  login,
  logout,
};
