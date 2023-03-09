const database = require("../database/dbConfig");
const {
  BadRequestError,
  NotFoundError,
} = require("../errors");
const { StatusCodes } = require("http-status-codes");

const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new BadRequestError("Nincs ezzel az id-vel termék");
  database.query("DELETE FROM calorie WHERE id = ?;", [id], (err) => {
    if (err) {
      res.status(StatusCodes.NOT_FOUND).send(err);
    }
    res.status(StatusCodes.NO_CONTENT).send("Sikeres törlés...");
  });
};

const createItem = async (req, res) => {
  const product = { ...req.body };
  if (!product.item_id) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .send("Nincs termék ezzel az azonosítóval");
  }
  database.query(
    "INSERT INTO calorie VALUES(?,?,?,?,?,?,?)",
    [
      product.item_name,
      product.amount,
      product.carbohydrate,
      product.protein,
      product.fat,
      product.userId,
    ],
    (err) => {
      if (err) {
        res.status(StatusCodes.NOT_FOUND).send(err);
      }
      res.status(StatusCodes.OK).send({ product: product.item_name,id:item_id });
    }
  );
};

const updateItem = (req, res) => {
  const product = { ...req.body };
  if (!product.item_id) throw new NotFoundError("Nincs termék ilyen id-vel");
  database.query(
    "UPDATE calorie SET name = ?, amount = ? WHERE id = ? ",
    [product.item_name, product.amount,product.item_id],
    (err) => {
      if (err) {
        res.status(StatusCodes.NOT_FOUND).send(err);
      }
      res
        .status(StatusCodes.OK)
        .send('Updated \n'+{id:item_id, product: product.item_name, amount: product.amount });
    }
  );
};

const allItem = (req, res)=>{
  database.query('SELECT * FROM calorie;',(err,rows)=>{
    if(err){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
    }
    res.status(StatusCodes.OK).send(rows)
  })
}

const getItem = (req, res)=>{
  const id = req.params.item_id
  if(!id) throw new BadRequestError('Nincs id')
  database.query('SELECT * FROM calorie WHERE id = ?',[id],(err,rows)=>{
    if(err){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
    }
    if(rows.length === 0){
      throw new NotFoundError(`No item with ${id} id`)
    }
    res.status(StatusCodes.OK).send(rows[0])
  })
}



module.exports = {
  getItem,
  allItem,
  updateItem,
  createItem,
  deleteItem,
 /* setCurrentWeight,
  setTargetWeight*/
}