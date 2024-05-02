// index.js

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());

// Route pour la racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API');
});

app.use('/api', userRouter);

mongoose.connect('mongodb://localhost:27017/bdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
