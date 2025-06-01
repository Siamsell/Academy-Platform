$(document).ready(function() {
    $('#demandeForm').submit(function(event) {
      event.preventDefault();
      var demande = {
        nom: $('#nom').val(),
        description: $('#description').val()
      };
      $.ajax({
        type: 'POST',
        url: 'traitement.php',
        data: demande,
        success: function(data) {
          console.log(data);
          afficherDemandes();
        }
      });
    });
  
    function afficherDemandes() {
      $.ajax({
        type: 'GET',
        url: 'demandes.php',
        success: function(data) {
          $('#demandes').html(data);
        }
      });
    }
  
    function validerDemande(id) {
      $.ajax({
        type: 'POST',
        url: 'validation.php',
        data: {id: id},
        success: function(data) {
          console.log(data);
          afficherDemandes();
        }
      });
    }
  });