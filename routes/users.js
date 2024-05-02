// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route pour créer un nouvel utilisateur
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route pour afficher tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Récupère tous les utilisateurs depuis la base de données
        res.json(users); // Renvoie la liste des utilisateurs au format JSON
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
