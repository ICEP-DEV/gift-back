const express=require('express');
const jwt = require('jsonwebtoken');  
const verify = require ('../veriftToken');
const connection  = require('../config/conn_db');
authController=require('../controllers/auth');
const router=express.Router();

//not fully functioning
router.post('/admin',authController.AdminLogin);
router.post('/customer',authController.customer_login);


module.exports=router;