const express = require('express');
const path = require('path');
const axios = require ('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/:page?', (req, res) => {
    const page = req.params.page || '/';
    const filePath = path.join(__dirname, 'public', `${page}.html`);
  
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).send('Page Not Found');
      }
    });
  });



  const url = `https://aminasheriff.onrender.com/`;
  const interval = 30000; 
  
  function reloadWebsite() {
    axios.get(url)
      .then(response => {
        console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
      })
      .catch(error => {
        console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
      });
  }
  
  
  setInterval(reloadWebsite, interval);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`server listening at port ${PORT}...`))