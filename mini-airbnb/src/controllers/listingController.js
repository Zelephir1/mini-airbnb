const listings = require('../models/listing');

exports.getListing = (req, res) => {
    const listing = listings.find(item => item.id === parseInt(req.params.id));
    if (listing) {
        res.render('listing', { listing });
    } else {
        res.status(404).send('Logement non trouvé');
    }
};
