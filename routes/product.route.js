const { Router } = require('express');
const { home, homeUser } = require('../controllers/product.controller.js');

const router = Router();

router.get('/', home);
router.get('/:user', homeUser);

module.exports = router;