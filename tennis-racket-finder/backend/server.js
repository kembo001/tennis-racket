const express = require('express');
const rackets = require ('./rackets')
const app = require('express') ();
const cors = require('cors');
const PORT = 8080;

app.use(cors());

app.get('/rackets', (req, res) => {
    res.json(rackets);
  });

  app.get('/rackets/:id', (req, res) => {
    const { id } = req.params;
    const racket = rackets.find(r => r.id === parseInt(id));
    if (racket) {
      res.json(racket);
    } else {
      res.status(404).send({ message: 'Racket not found' });
    }
  });
  


  app.listen(PORT, () => {
    console.log(`It's alive on http://localhost:${PORT}`);
  });