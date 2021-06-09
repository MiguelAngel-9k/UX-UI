const {Router} = require('express');
const multer = require('multer');
const {register, login, profile, personalInfo, adressInfo, getOnboard, setOnboard, estUserImage} = require('../controllers/user.controller');

//donde se guardaran los archivos
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/assets/img') //path donde se guardan
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) //nombre
    }
})

const upload = multer({ storage: storage }).single('avatar');

const router = Router();

router.post('/register', register);
router.get('/profile', login);
router.get('/:email', profile);
router.post('/update-info', personalInfo);
router.post('/update-adress', adressInfo);
router.post('/set-avatar', upload, estUserImage);
//router.get('/onboard', getOnboard);
router.post('/onboard', setOnboard);

//multipart/form-data

module.exports = router;