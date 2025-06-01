<?php
$servername = "localhost";
$username = "root"; // Remplace par ton nom d'utilisateur
$password = ""; // Remplace par ton mot de passe
$dbname = "mydatabase";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}
include 'db_connect.php';

$sql = "SELECT email, comment, created_at FROM comments ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<li><p>" . $row["comment"] . "</p><p>Par: " . $row["email"] . "</p></li>";
    }
} else {
    echo "Aucun commentaire pour le moment.";
}

$conn->close();
?>
