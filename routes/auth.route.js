const { Router } = require('express');

const userCtr = require('../controllers/auth.ctr');
const userValidation = require('../middlewares/validations/user.validation');
const loginValidation = require('../middlewares/validations/login.validation');
const validate = require('../middlewares/ValidationHandler');

const router = Router();

router.post('/signup', userValidation, validate, userCtr.createUser);
router.post('/signin', loginValidation, validate, userCtr.login);

module.exports = router;
