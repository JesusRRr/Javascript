const mongoose = require('mongoose')

console.log(process.env.MONGODB_URI)

mongoose.connect('mongodb://localhost/booksdb',{
    useNewUrlParser:true
})
    .then(db=> console.log('DB is connected'))
    .catch(error=> console.error(error));
