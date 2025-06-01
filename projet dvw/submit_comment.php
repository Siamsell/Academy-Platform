<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    // Préparer et exécuter la requête d'insertion
    $stmt = $conn->prepare("INSERT INTO comments (email, comment) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $comment);

    if ($stmt->execute()) {
        echo "Commentaire ajouté avec succès!";
    } else {
        echo "Erreur : " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
