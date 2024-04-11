document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    var email = document.getElementById('newsletter-form-email').value;
    // Envoyer l'adresse e-mail à un service tiers ou la stocker localement
    // Exemple de stockage local :
    localStorage.setItem('newsletter-form-email', email);
});
