const database = require("../database/dbConfig");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Nincs ezzel az id-vel termék");
  database.query("DELETE FROM calorie WHERE id = ?;", [id], (err) => {
    if (err) {
      res.status(StatusCodes.NOT_FOUND).send(err);
    }
    res.status(StatusCodes.OK).send("Sikeres törlés...");
  });
};

const createItem = (req, res) => {
  const product = { ...req.body };
  console.log(product);
  database.query(
    "INSERT INTO calorie (name,amount,carbohydrate,protein,fat,totalCalorie,userId) VALUES(?,?,?,?,?,?,?);",
    [
      product.name,
      product.amount,
      product.carbohydrate * product.amount,
      product.protein * product.amount,
      product.fat * product.amount,
      product.totalCalorie * product.amount,
      product.userId,
    ],
    (err) => {
      if (err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
      res.status(StatusCodes.CREATED).send("Created...");
    }
  );
};

const updateItem = (req, res) => {
  const id = req.params.id;
  const { item_name, amount } = req.body;
  if (!id)
    return res.status(StatusCodes.BAD_REQUEST).send("Nics termék azonosító!");
  database.query(
    "UPDATE calorie SET name = ?, amount = ? WHERE id = ? ",
    [item_name, amount, id],
    (err) => {
      if (err) {
        res.status(StatusCodes.NOT_FOUND).send(err);
      }
      res
        .status(StatusCodes.OK)
        .send("Updated \n" + { id: id, name: item_name, amount: amount });
    }
  );
};

const allItem = (req, res) => {
  const userId = req.params.userId;
  database.query(
    "SELECT * FROM calorie WHERE userId=?;",
    [userId],
    (err, rows) => {
      if (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
      }
      res.status(StatusCodes.OK).send(rows);
    }
  );
};

const getItem = (req, res) => {
  const id = req.params.id;
  if (!id) throw new BadRequestError("Nincs id");
  database.query("SELECT * FROM calorie WHERE id = ?", [id], (err, rows) => {
    if (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
    if (rows.length === 0) {
      return res.statis(StatusCodes.NO_CONTENT).send('No content')
    }
    res.status(StatusCodes.OK).send(rows[0]);
  });
};

module.exports = {
  getItem,
  allItem,
  updateItem,
  createItem,
  deleteItem,
};
