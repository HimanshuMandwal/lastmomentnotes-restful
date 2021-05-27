const {User,validate}= require('../models/users');
const mongoose = require('mongoose');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config =require('config');
 

router.post('/', async (req,res)=>{
   const {error}= validate(req.body);
   if(error)
   return res.status(400).send(error.details[0].message);

   let user = await User.findOne({email: req.body.email});
   if(user)
   return res.status(400).send('Email Already Exist'); 

   const salt = await bcrypt.genSalt(10);
   user = new User({
      name: req.body.name,
      email: req.body.email, 
      password: await bcrypt.hash(req.body.password,salt)
   });
   await user.save();
   
   const token = await user.generateAuthToken();
    res.header('x-auth-token',token).send( _.pick(user,['id','name','email']));
});

module.exports = router;