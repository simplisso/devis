// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth'); // Importe nos routes d'authentification

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware : outils qui s'exécutent avant les routes
app.use(cors()); // Permet la communication entre le Front-End (navigateur) et le Back-End
app.use(bodyParser.json()); // Pour analyser le JSON envoyé par le Front-End

// Association des routes API
app.use('/api/auth', authRoutes); // Toutes les requêtes vers /api/auth sont gérées par authRoutes

// Route de test
app.get('/', (req, res) => {
    res.send('API Devis Pro est en cours d\'exécution. Port: ' + PORT);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur Back-End démarré sur le port ${PORT}`);
});