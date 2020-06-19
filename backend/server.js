const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const db = require('./config/keys').mongoURI;
// const users = require('./routes/api/users') 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World"));
// app.use("/api/users",users);



// mongoose
//     .connect( db, { useNewUrlParser : true })
//     .then( () => console.log("Connected to MongoDB successfully"))
//     .catch( err => console.log( err ))
    
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
      app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
      })
    }

const port = process.env.PORT || 5000;
app.listen( port, () => console.log( `Server is running on port ${port}`))

