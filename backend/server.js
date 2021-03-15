const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

app.use(express.json());

// The forum says to ignore DB warnings
mongoose.connect(process.env.DB_CONNECT,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
  (err) => {
      if(err) return console.error(err);
      console.log("Connected to the database");
  });

const PORT = process.env.PORT || 3000;

app.get('/api/test', (req,res)=>{
    res.send("Test");
});

const server = app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

process.on("unhandledRejection", (err, promise) =>{
    console.log("Error: " + err);
    server.close(() => process.exit(1));   
})

// Set up routes
app.use('/', express.static(path.join(__dirname,'../frontend/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    })
  })

  app.use("/api/auth" ,require('./routes/Auth'));
  app.use("/api/fitness" ,require('./routes/Fitness'));
  app.use("/api/informations" ,require('./routes/HandleInformations'));