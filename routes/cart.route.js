const { Router } = require('express');
const router = Router();
const { addItem } = require('../controllers/cart.controller');

router.get('/:email/:product', addItem);

module.exports = router;