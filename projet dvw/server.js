const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Créez une connexion à la base de données MySQL
 db = mysql.createConnection({
  host: 'localhost', // Remplacez par votre hôte MySQL
  user: 'root',      // Remplacez par votre utilisateur MySQL
  password: '222',      // Remplacez par votre mot de passe MySQL
  database: 'mydatabase' // Remplacez par votre nom de base de données
});

// Connectez-vous à la base de données MySQL
dbconnect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Utilisez le dossier 'public' pour les fichiers statiques
app.use(express.static('public'));

// Route pour récupérer des données de la base de données
app.get('/api/data', (req, res) => {
  let sql = 'SELECT * FROM mytable'; // Remplacez 'mytable' par le nom de votre table
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// Route pour servir le fichier HTML principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
