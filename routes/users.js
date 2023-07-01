const express = require ('express');
const router = express.Router();
const user = require('../controllers/users_contoller');
router.get('/signin',user.signin );
router.get('/signup',user.signup);
router.get('/userprofile',user.userprofile);
console.log("router loaded");
router.post('/create',user.createuser);
router.post('/create-session',user.createsession);

module.exports = router;