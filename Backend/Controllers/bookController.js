const Book = require("../Models/bookModel");

const getAllBooks = async(req, res) =>{
    let books;

    try{
        books = await Book.find();
        if(!books)
        {
            return res.status(404).json({message: "No data found"});
        }
        if (books)
        {
            return res.status(200).send(books);
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};


const getBookById = async(req, res) =>{
    const id = req.params.id;
    let book;

    try{
        book = await Book.findById({ _id: id });
        if(!book)
        {
            return res.status(404).json({message: "No data found"});
        }
        if (book)
        {
            return res.status(200).json({book});
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};


const addBook = async(req, res) => {
    const {name, author, summary, image, price, available} = req.body;

    try{
        let newbook = await Book.create({name, author, summary, image, price, available});
        if(!newbook)
        {
            return res.status(400).json({message: "No book created"});
        }
        if (newbook)
        {
            return res.status(200).json({message: "Book created"});
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};

const updateBook = async (req, res) => {
    const id = req.params.id;
    const {name, author, summary, image, price, available} = req.body;
    let book;

    try {
        book = await Book.findByIdAndUpdate({_id:id}, req.body, {new:true});
        if(!book)
        {
            return res.status(500).json({message: "Book not updated"});
        }
        if(book)
        {
            return res.status(202).json({message: "Book updated successfully"});
        }
        await book.save();
    }
    catch(err) {
        return res.status(400).json({message:err.message});
    }
};

const deleteBook = async (req, res) => {
    const id = req.params.id;
    let book;

    try 
    {
        book = await Book.findByIdAndDelete({_id:id});
        if(!book) 
        {
            return res.status(200).json({message: "No book found with this ID"});
        }
        if(book)
        {
            return res.status(404).json({message: "Book successfully deleted"});
        }
    }
    catch(err) {
        return res.status(400).json({message: err.message});
    }
};
  


module.exports = {getAllBooks, getBookById, addBook, updateBook, deleteBook};