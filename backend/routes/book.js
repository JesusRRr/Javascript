const {Router} =require('express');
const router = Router();

const Book = require('../models/Book')
router.get('/',async (req,res)=> {
    const books = await Book.find()
    res.json(books);
    
});

router.post('/',async (req,res)=> {
    const {title, author, isbn }=req.body;
    const newBook =new Book({title, author, isbn})
    console.log(newBook)
    await newBook.save()
        .then(resp => res.json({'message':resp}))
        .catch(error => res.json({'message':error.message}))
});

router.delete('/:id',async (req,res)=>{
    await Book.findByIdAndDelete(req.params.id)
    res.json({message:'book Deleted'})
});
module.exports =router;