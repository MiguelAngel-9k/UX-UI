const { Router } = require('express');
const { home, homeUser, purchase } = require('../controllers/product.controller.js');

const router = Router();

router.get('/', home);
router.get('/:user', homeUser);
router.post('/purchase', purchase);

module.exports = router;