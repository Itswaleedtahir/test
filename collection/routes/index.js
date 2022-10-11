const express = require('express')
const router = express.Router();
const K2X = require('../controllers/index')

router.post('/',K2X.post);
router.get('/',K2X.Getall);

module.exports = router;