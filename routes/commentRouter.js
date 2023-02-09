const express = require("express");
const router = express.Router();
const {
  getComment,
  allComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.get('/messages/:id',getComment)
router.get('/messages',allComment)
router.post('/messages',createComment)
router.put('/messages/:id',updateComment)
router.delete('messages/:id',deleteComment)


module.exports = router