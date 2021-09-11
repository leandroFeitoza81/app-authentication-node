const router = require('express').Router();
const wellcomeController = require('./controllers/wellcomeController');
const userController = require('./controllers/userController');

router.get('/', wellcomeController);
router.get('/users', userController.getAllUsers);

module.exports = router;
