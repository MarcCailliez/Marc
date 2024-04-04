/* JavaScript pour le formulaire d'évaluation de Jarditou */

// Fonction pour vérifier la date de naissance
function verifierDate(date) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.]\d{4}$/;
    return regex.test(date);
  }
  
  // Fonction pour vérifier le code postal
  function verifierCodePostal(codePostal) {
    const regex = /^\d{5}$/;
    return regex.test(codePostal);
  }
  
  // Fonction pour vérifier l'adresse e-mail
  function verifierEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  // Fonction pour effacer les messages d'erreur
  function effacerMessagesErreur() {
    const errors = document.getElementsByClassName("error");
    while (errors.length > 0) {
      errors[0].remove();
    }
  }
  
  // Fonction pour afficher un message d'erreur
  function setErrorMessage(element, message) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "error";
    errorContainer.textContent = message;
    element.parentNode.insertBefore(errorContainer, element.nextSibling);
  }
  
  // Fonction pour effacer le formulaire
  function effacerFormulaire() {
    const formulaire = document.getElementById("contactForm");
    formulaire.reset();
    effacerMessagesErreur();
  }
  
  // Fonction pour vérifier et envoyer le formulaire
  function verifierFormulaire() {
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const sexeRadios = document.getElementsByName("Sexe*");
    const dateNaissance = document.getElementById("date");
    const codePostal = document.getElementById("postal");
    const sujetSelectionne = document.getElementById("Sujet*");
    const commentaire = document.getElementById("question");
    const email = document.getElementById("email");
    const acceptation = document.getElementById("acceptation");
  
    /* Effacer les messages d'erreur */
    effacerMessagesErreur();
  
    /* Vérifier que tous les champs obligatoires sont remplis */
    if (
      [nom, prenom, dateNaissance, codePostal, sujetSelectionne, commentaire, email].some((champ) => champ.value.length < 1)
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    /* Vérifier les entrées */
    if (!nom.value.trim()) {
      // log('Le nom est manquant.');
      setErrorMessage(nom, " * Veuillez entrer votre nom.");
    }
  
    if (!prenom.value.trim()) {
      // log('Le prénom est manquant.');
      setErrorMessage(prenom, " * Veuillez entrer votre prénom.");
    }
  
    let sexeSelectionne = false;
    for (const sexeRadio of sexeRadios) {
      if (sexeRadio.checked) {
        sexeSelectionne = true;
        break;
      }
    }
    if (!sexe