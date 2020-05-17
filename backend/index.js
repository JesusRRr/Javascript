const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const app = express();
app.set('port',3000);


//Middlewares
app.use(morgan('dev'));//messages from server
const storage =multer.diskStorage({
    destination:path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null,new Date().getTime()+path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));//used for manage images
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes
app.use('/api/books',require('./routes/book'));

//Start server
app.listen(app.get('port'), ()=>{
    console.log("Server on port",app.get('port'));
})