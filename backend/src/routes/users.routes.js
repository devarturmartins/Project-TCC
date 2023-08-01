const { Router } = require('express');
const userController  = require('../controllers/users.controller');
const loginValidate = require('../middlewares/login.middleware');

const router = Router();

// router.get('/', userController.getAll);
router.post('/', loginValidate, userController.login);
router.post('/cadastro', userController.createUsers);

module.exports = router;