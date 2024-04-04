/* javascript pour jarditou pour  evaluation */ 

function verif(){

    const name = document.getElementById("nom");
    const firstname = document.getElementById("prenom");
    const sexContainer = document.getElementById("Sexe_*");
    const jour = document.getElementById("date");
    const cp = document.getElementById("postal");
    /* const town = document.getElementById("ville"); */
    const email = document.getElementById("email");
    const roulette = document.getElementById("Sujet*");
    const commentaire = document.getElementById("question");
    const validation = document.getElementById("acceptation");


/* effacer message erreur  */
    clearErrorMessages();


/* validation des entrées */
if (name.value.length < 1) {
    setErrorMessage(name, "* Veuillez entrer votre nom.");
  }
  if (firstname.value.length < 1) {
    setErrorMessage(firstname, "* Veuillez entrer votre prénom.");
  }
  
  if (!sexContainer.querySelector('input[name="Sexe*"]:checked')) {

    setErrorMessage(sexContainer, "* Veuillez sélectionner votre sexe.");

  }

if (jour.value.length < 1) {
  setErrorMessage(jour, "* Veuillez entrer votre date de naissance.");
} 

  if (cp.value.length !== 5 || !isNumeric(cp.value)) {
    setErrorMessage(cp, "* Entrez un code postal à 5 chiffres.");
  }
  
  if (roulette.value === "Veuillez séléctionner un sujet") {

    setErrorMessage(roulette, "* Veuillez sélectionner un sujet.");

  }
  if (commentaire.value.length < 1) {
    setErrorMessage(commentaire, "* Veuillez taper votre question.");
  }
  if (email.value.indexOf("@" && ".") < 0) {
    setErrorMessage(email, "* Veuillez entrer une adresse email valide.");
  }

  if (!validation.checked) {

    setErrorMessage(validation, "* Vous devez accepter les conditions.");

  }

 /* Afficher un message de confirmation si aucune erreur n'a été trouvée */

 if (document.querySelectorAll(".error").length === 0) {
    
    /* let messagealert = document.createElement("p"); */

  /* messagealert.className = "alertcolor";

  messagealert.textContent = "Merci ! Votre formulaire a bien été envoyé.";  */

  /* document.body.appendChild(messagealert); */
 
    alert( "Merci ! Votre formulaire a bien été envoyé.");
    /* alert.className('alertcolor'); */
  }
}


/* Effacer les entrées du formulaire */
function efface() {
    document.getElementById("contactForm").reset();
    document.getElementById("message").innerText = "";
    /* document.querySelector("fieldset").style.backgroundColor = ""; */
    document.getElementById("bouton").style.display = "flex";
    /* document.getElementById("legend").style.display = "block"; */
    clearErrorMessages();
  }

/* Afficher un message d'erreur */

function setErrorMessage(element, message) {
    const error = document.createElement("span");
    error.classList.add("error");
    error.innerText = message;
    element.parentNode.insertBefore(error, element.nextSibling);
  }


  /* Vérifier si que des chiffres */

function isNumeric(str) {
    return str.match(/^\d+$/) !== null;
  }

  function clearErrorMessages() {
    const errors = document.getElementsByClassName("error");
  
    while (errors.length > 0) {
      errors[0].remove();
    }
  }