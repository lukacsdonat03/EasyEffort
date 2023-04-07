const express = require("express");
const router = express.Router();
const {
  deleteUser,
  getAllUser,
  getUser,
  setCurrentWeight,
  setTargetWeight,
  setCurrentCalorie,
  setTargetCalorie,
  updateAdmin,updatePassword
} = require("../controllers/userController");

router.get('/all',getAllUser)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.put('/target-weight/:id',setTargetWeight)
router.put('/current-weight/:id',setCurrentWeight)
router.put('/current-cal/:id',setCurrentCalorie)
router.put('/target-cal/:id',setTargetCalorie)
router.put('/admin',updateAdmin)
router.put('/admin/password',updatePassword)

module.exports = router
