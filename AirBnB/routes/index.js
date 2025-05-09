var express = require('express');
var router = express.Router();
var logementAccueil = require('../data/logementAccueil');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', logementAccueil });
});

const logements = [
  { id: 1, titre: 'Studio à Paris', description: 'Joli studio dans le Marais' },
  { id: 2, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 3, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 4, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 5, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 6, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 7, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 8, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 9, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 10, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 11, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },
  { id: 12, titre: 'Appartement à Lyon', description: 'Vue sur Fourvière' },

  
];

router.get('/logement/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    return res.status(404).send('Logement non trouvé');
  }

  res.render('logement', { logement });
});


module.exports = router;

