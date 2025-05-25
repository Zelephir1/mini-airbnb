const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const listingRoutes = require('./routes/listingRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoutes);
app.use('/listing', listingRoutes);

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
