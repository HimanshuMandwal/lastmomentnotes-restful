const express = require( 'express');
const  mongoose  = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const config = require('config');
const PORT = 3000;
const app = express();
const dotenv = require('dotenv');
dotenv.config();

if(!config.get('JWTPRIVATEKEY'))
{console.error('jwtPrivateKey not set:(');
process.exit(1);
}
mongoose.connect('mongodb://localhost/lastmomentnotes')
.then(()=>console.log('Connected to DB......Cheers:)'))
.catch(err=>console.log('Could Not connect to DB '+err));

app.use(express.json());
app.use('/api/users',users);
app.use('/api/auth',auth);


app.listen(PORT , function(err){
  if(err){
    console.error(`index :: error in starting the server ${err}`);
  }
  console.info(`index :: server is running on port ${PORT}`);
})