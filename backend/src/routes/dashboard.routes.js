const { Router } = require('express');
const dashboardController = require('../controllers/dashboard.controller');
const authMiddleware = require('../middlewares/token.middleware');

const router = Router();

router.get('/', authMiddleware, dashboardController.getAll);

module.exports = router;