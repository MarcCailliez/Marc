/* exercie formulaire */


/* Vérifier les entrées du formulaire */

function verif() {
  /* Sélectionner les éléments du formulaire */

  const soc = document.getElementById("societe");
  const pers = document.getElementById("personne");
  const cp = document.getElementById("codepostal");
  const ville = document.getElementById("ville");
  const email = document.getElementById("email");
  const sujet = document.getElementById("Sujet");
  /* const roulette = document.getElementById("roulette"); */
  /* const message = document.getElementById("message"); */
  const telephone = document.getElementById("tel");

  /* Effacer les messages d'erreur précédents */

  clearErrorMessages();

  /* Valider les entrées */

  if (soc.value.length < 1) {
    setErrorMessage(soc, "Veuillez entrer le nom de la société.");
  }
  if (pers.value.length < 1) {
    setErrorMessage(pers, "Veuillez entrer le nom de la personne à contacter.");
  }
  if (cp.value.length !== 5 || !isNumeric(cp.value)) {
    setErrorMessage(cp, "Le code postal doit comporter exactement 5 chiffres.");
  }
  if (ville.value.length < 1) {
    setErrorMessage(ville, "Veuillez entrer le nom de la ville.");
  }
  if (email.value.indexOf("@" && ".") < 0) {
    setErrorMessage(email, "Veuillez entrer une adresse email valide.");
  }
  if (sujet.value === "Choisissez") {
    setErrorMessage(sujet, "Veuillez sélectionner un environnement technique.");
  }
  if (isNumeric(telphone.value)){
        setErrorMessage(telephone, 'Veuillez entrer un numéro de téléphone valide')
    }


  /* Afficher un message de confirmation si aucune erreur n'a été trouvée */

  if (document.querySelectorAll(".error").length === 0) {
    alert( "Merci ! Votre formulaire a bien été envoyé.");
  }
}

/* Effacer les entrées du formulaire */
function efface() {
  document.getElementById("contactForm").reset();
  document.getElementById("message").innerText = "";
  document.querySelector("fieldset").style.backgroundColor = "";
  document.getElementById("bouton").style.display = "flex";
  document.getElementById("legend").style.display = "block";
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

/* Verifier chiffre numéro de tel */
function Tel(str2){
    return str2.match(/* numéro de tel à mettre */ )


}
/* Effacer tous les messages d'erreur */

function clearErrorMessages() {
  const errors = document.getElementsByClassName("error");

  while (errors.length > 0) {
    errors[0].remove();
  }
}

const select = document.getElementById("Sujet");
const roulette = document.getElementById("roulette");

select.addEventListener("change", () => {
  roulette.value = select.value;
});
