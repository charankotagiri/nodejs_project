const express = require('express');
const router = express.Router();
const controller = require("../controllers/home_controller");
router.get('/',controller.home);
router.use('/users', require('./users'));
module.exports = router;
