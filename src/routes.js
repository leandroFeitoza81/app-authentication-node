const router = require('express').Router();
const wellcomeController = require('./controllers/wellcomeController');

router.use('/', wellcomeController);

module.exports = router;
