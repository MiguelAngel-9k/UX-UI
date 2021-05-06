const {Router} = require('express');
const {getUser,newUser} = require('../controllers/user.controller');

const router = Router();

router.get('/',getUser);
router.post('/',newUser);

module.exports = router;