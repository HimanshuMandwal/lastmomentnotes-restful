const express = require( 'express');

const PORT = 8080;
const app = express();

app.get('/' , function(req , res){
  console.log(req.url)
  return res.send('<h1> .lastMomentNotes </h1>')
})



app.listen(PORT , function(err){
  if(err){
    console.error(`index :: error in starting the server ${err}`);
  }
  console.info(`index :: server is running on port ${PORT}`);
})