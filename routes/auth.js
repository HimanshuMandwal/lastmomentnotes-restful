const {User}= require('../models/users');
const mongoose = require('mongoose');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('Joi');
const jwt = require('jsonwebtoken');
const config =require('config');

router.post('/', async (req,res)=>{
   const {error}= validate(req.body);
   if(error)
   return res.status(400).send(error.details[0].message);
  
   let user = await User.findOne({email: req.body.email});
   if(!user)
   return res.status(400).send('Invalid Email or Password'); 

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword)
  return res.status(400).send('Invalid Email or Password'); 

 // const token = jwt.sign({_id: user._id},config.get('jwtPrivateKey'));
 const token = jwt.sign({_id: user._id},'jwtPrivateKey');

  res.send(token);
});


function validate(req)
{
  const schema = {
    email: Joi.string().min(5).max(100).required().email(),
    password: Joi.string().min(5).max(500).required()
  };
  return Joi.validate(req,schema);
}
module.exports = router;