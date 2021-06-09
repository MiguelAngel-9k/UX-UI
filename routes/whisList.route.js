const { Router } = require('express');
const {lists, userList, addList, removeList} = require('../controllers/wishList.controller');

const router = Router();

router.get('/:email',lists);
router.get('/:email/:list', userList);
router.post('/add-list', addList);
router.get('/remove-list/:email/:list', removeList);

module.exports = router;