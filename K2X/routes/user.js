const express = require('express')
const router = express.Router();
const K2X = require('../controllers/index')
const auth = require('../middleware/isUser')

router.post('/',K2X.user);
router.get('/',K2X.getall);
router.post('/business:userId',auth,K2X.business);
router.get('/business',K2X.get);

module.exports = router;