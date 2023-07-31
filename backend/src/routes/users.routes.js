const { Router } = require('express');
const userController  = require('../controllers/users.controller');

const router = Router();

router.get('/', userController.getAll);

module.exports = router;