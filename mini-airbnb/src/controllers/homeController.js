const listings = require('../models/listing');

exports.getHome = (req, res) => {
    res.render('home', { listings });
};

exports.searchListings = (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const filteredListings = listings.filter(listing =>
        listing.title.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query)
    );
    res.render('home', { listings: filteredListings });
};