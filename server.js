const express = require('express');
const app = express();
const PORT = 3000;

// Permet d'accéder aux fichiers statiques (CSS, images...)
app.use(express.static('public'));

// Définit EJS comme moteur de template
app.set('view engine', 'ejs');

// Exemple de données fictives
const logements = [
  { id: 1, nom: 'Château Sombre' },
  { id: 2, nom: 'Cabane Perdue' }
];

// Route d'accueil
app.get('/', (req, res) => {
  res.render('accueil', { logements });
});

// Route de détail
app.get('/logement/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logements.find(l => l.id === id);
  if (!logement) return res.status(404).send('Logement non trouvé');
  res.render('detail', { logement });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
