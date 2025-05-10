var express = require('express');
var router = express.Router();
var logementAccueil = require('../data/logementAccueil');

router.get('/', function(req, res) {
  const { ville, prixMin, prixMax, type } = req.query;

  let logementsFiltres = logementAccueil;

  if (ville && ville.trim() !== '') {
    logementsFiltres = logementsFiltres.filter(l => l.ville.toLowerCase() === ville.toLowerCase());
  }

  if (prixMin) {
    logementsFiltres = logementsFiltres.filter(l => l.prix >= parseInt(prixMin));
  }

  if (prixMax) {
    logementsFiltres = logementsFiltres.filter(l => l.prix <= parseInt(prixMax));
  }

  if (type && type.trim() !== '') {
    logementsFiltres = logementsFiltres.filter(l => l.type.toLowerCase() === type.toLowerCase());
  }

  res.render('index', {
    title: 'Accueil Airbnb',
    logementAccueil: logementsFiltres
  });
});

module.exports = router;

