const express = require("express");
const router = express.Router();
const {
  getComment,
  allComment,
  createComment,
  deleteComment,
  aprovedComment,
  rejectedComment,
} = require("../controllers/commentController");

router.get('/messages/:id',getComment)
router.get('/messages',allComment)
router.post('/messages',createComment)
router.delete('messages/:id',deleteComment)
router.get('aproved',aprovedComment)
router.get('rejected',rejectedComment)

module.exports = router