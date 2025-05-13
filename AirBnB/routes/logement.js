var express = require('express');
var router = express.Router();
var logementAccueil = require('../data/logementAccueil');

// Ceci est pour trouver les détails du logement correspondant
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logementAccueil.find(l => l.id === id);

  if (!logement) {
    return res.status(404).send('Logement non trouvé');
  }

  res.render('logement', { logement });
});

module.exports = router;
