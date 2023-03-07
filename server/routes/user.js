const express = require('express');
const userController = require('../controllers/userController')



const router = express.Router();


router.get('/:id',
  userController.getUserData,
  (req, res) => res.status(200).send(res.locals)
);

module.exports = router;