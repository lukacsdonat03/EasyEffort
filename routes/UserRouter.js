const express = require("express");
const router = express.Router();
const {
  deleteUser,
  getAllUser,
  getUser,
  setCurrentWeight,
  setTargetWeight,
} = require("../controllers/userController");

router.get('/all',getAllUser)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.put('/target-weight/:id',setTargetWeight)
router.put('/current-weight/:id',setCurrentWeight)

module.exports = router
