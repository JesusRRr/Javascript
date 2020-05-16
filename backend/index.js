const express = require('express');
const morgan = require('morgan');
const multer = require('multer')

const app = express();
app.set('port',3000);


//Middlewares
app.use(morgan('dev'));

//Start server
app.listen(app.get('port'), ()=>{
    console.log("Server on port",app.get('port'));
})