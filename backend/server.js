const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

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
