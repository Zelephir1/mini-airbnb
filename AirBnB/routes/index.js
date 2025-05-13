var express = require('express');
var router = express.Router();
var logementAccueil = require('../data/logementAccueil');

router.get('/', function(req, res) {
  // On récupère les paramètres GET
  const {
    Chambres,
    Lits,
    Salle_de_bain,
    Produits_et_service_de_base,
    Caracteristiques,
    Emplacement,
    Securite,
    Entree_et_stationnement_pour_les_voyageurs,
    Chambre1,
    Salle_de_bain1,
    Equipement_d_accessibilite,
    langue,
    ville,
    prixMin,
    prixMax,
    type
  } = req.query;

  let logementsFiltres = logementAccueil;

  // Filtres numériques (select "1+", etc.)
  if (Chambres && Chambres.trim() !== '') {
    logementsFiltres = logementsFiltres.filter(l => Number(l.Chambres) >= Number(Chambres));
  }
  if (Lits && Lits.trim() !== '') {
    logementsFiltres = logementsFiltres.filter(l => Number(l.Lits) >= Number(Lits));
  }
  if (Salle_de_bain && Salle_de_bain.trim() !== '') {
    logementsFiltres = logementsFiltres.filter(l => Number(l.Salle_de_bain) >= Number(Salle_de_bain));
  }

  // Fonction générique pour les checkbox
  function filtrerCheckbox(logementAccueil, champ, valeurs) {
    if (!valeurs) return logementAccueil;
    const valeursTableau = Array.isArray(valeurs) ? valeurs : [valeurs];
    return logementAccueil.filter(l => {
      const propriete = l[champ];
      if (!propriete) return false;
      return valeursTableau.every(val => propriete.includes(val));
    });
  }

  // Filtres checkbox
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Produits_et_service_de_base', Produits_et_service_de_base);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Caracteristiques', Caracteristiques);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Emplacement', Emplacement);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Securite', Securite);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Entree_et_stationnement_pour_les_voyageurs', Entree_et_stationnement_pour_les_voyageurs);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Chambre1', Chambre1);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Salle_de_bain1', Salle_de_bain1);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'Equipement_d_accessibilite', Equipement_d_accessibilite);
  logementsFiltres = filtrerCheckbox(logementsFiltres, 'langue', langue);

  // Filtres supplémentaires sans checkbox
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

