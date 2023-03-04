const express = require('express');
const testController = require('../controllers/testController');
const router = express.Router();
router.get('/', testController.test, (req, res) => res.status(200).end());
module.exports = router;
