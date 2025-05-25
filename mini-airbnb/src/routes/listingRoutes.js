const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');

router.get('/:id', listingController.getListing);

module.exports = router;
