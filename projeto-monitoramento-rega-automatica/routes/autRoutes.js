const express = require('express');
const router = express.Router();

const signupControllers = require('../controllers/signup');
const loginControllers = require('../controllers/login');
const logauthControllers = require('../controllers/logauth');

router.post('/signup', signupControllers);
router.post('/login', loginControllers);
router.post('/logauth', logauthControllers);

module.exports = router;