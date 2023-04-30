const express = require('express')
const router = express.Router()
const {getItems} = require('../controllers/CalorieCounterController')

router.post('/items',getItems)

module.exports = router