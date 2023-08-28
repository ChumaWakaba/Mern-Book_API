const express = require("express");
const mongoose = require("mongoose");
const Book = require("./Models/bookModel");
const dotenv = require("dotenv");
const app = express();
const router = require("./Routes/book-route");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('server is running on port', process.env.PORT);
    });
}).catch((err)=> {
    console.log(err);
});

app.use("/", router); 