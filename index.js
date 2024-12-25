const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about-me.html'));
  });

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact-me.html'));
});

app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/reviews.html'));
  });

  app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/projects.html'));
  });

  app.get('/certifications', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/certifications.html'));
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`server listening at port ${PORT}...`))