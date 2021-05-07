const {Router} = require('express');
const {getUser,newUser, login, signIn} = require('../controllers/user.controller');

const router = Router();

router.get('/',login);
router.get('/:email',getUser);
router.post('/',newUser);
router.post('/signIn',signIn);

module.exports = router;