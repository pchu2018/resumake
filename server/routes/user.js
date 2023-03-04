const express = require('express');



const router = express.Router();


router.get('/:id',
  resumeController.getComponent,
  (req, res) => res.status(200).send(res.locals)
);

module.exports = router;