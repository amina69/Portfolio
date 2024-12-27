const express = require('express');
const path = require('path');

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




const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`server listening at port ${PORT}...`))