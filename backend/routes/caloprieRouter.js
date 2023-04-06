const express = require("express");
const router = express.Router();
const {
  getItem,
  allItem,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/calorieController");

router.get('/:id',getItem)
router.get('/all',allItem)
router.post('/',createItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)

module.exports = router;
