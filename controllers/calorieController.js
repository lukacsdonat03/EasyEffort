const database = require("../database/dbConfig");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const { StatusCodes } = require("http-status-codes");

const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new BadRequestError("Nincs ezzel az id-vel termék");
  database.query("DELETE FROM calorie WHERE id = ?;", [id], (err) => {
    if (err) {
      console.log(err);
      throw new Error("Error:" + err);
    }
    res.status(StatusCodes.ACCEPTED).send("Sikeres törlés...");
  });
};

const createItem = async (req, res) => {
  const product = { ...req.body };
  if (!product.id || !product.index) {
    throw new NotFoundError("Nincs termék ezzel az azonosítóval");
  }
  database.query(
    "INSERT INTO calorie VALUES(?,?,?,?,?,?,?)",
    [
      product.name,
      product.amount,
      product.carbohydrate,
      product.protein,
      product.fat,
      product.category,
      product.userId,
    ],
    (err) => {
      if (err) {
        console.log("Error: " + err);
        throw new Error(err);
      }
      res.status(StatusCodes.OK).send({ product: product.name });
    }
  );
};

const updateItem = () => {
  const product = { ...req.body };
  if (!product.id) throw new NotFoundError("Nincs termék ilyen id-vel");
  database.query(
    "UPDATE calorie SET name = ?, amount = ? WHERE",
    [product.name, product.amount],
    (err) => {
      if (err) {
        console.log("Error" + err);
        throw new Error(err);
      }
      res
        .send(StatusCodes.OK)
        .send({ product: product.name, amount: product.amount });
    }
  );
};
