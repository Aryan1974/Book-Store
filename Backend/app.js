const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middle wares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect(
    "mongodb+srv://password123456@book-store.cw9znj4.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));

//  o9hbMeShi2s0SZkV