/* Exercice 1  */


/* let CountJeunes = 0;
let CountEntreDeux= 0;
let CountVieux = 0;
let age = 0;

while (age < 100) {
  age = prompt("Entrez votre âge");

  if (age < 20) {
    CountJeunes++;
  }
   else if (age >= 20 && age <= 40) {
    CountEntreDeux++;
  } 
  else if (age > 40) {
    CountVieux++;
  }
  else if (age < 0 ){
    alert("Entrez un âge valide")
    }
}

document.write("Il y a " + CountJeunes + " personnes de moins de 20ans" + "<br>");
document.write("Il y a " + CountEntreDeux+ " personnes qui ont entre 20 et 40 ans" + "<br>");
document.write("Il y a " + CountVieux + " personnes qui ont plus de 40 ans "); */


/* Exerice 2  */



/* function TableMultiplication(n){

    let i = 1;
    for (i; i <= 10; i++){

    resultat = n * i;
    document.write(n + " x " + i + " = " + n * i + "<br>");
    }
}
n = window.prompt("Entrez un nombre dont vous voulez connaître la table de multiplication");

TableMultiplication(n); */


/* Exercice 3  */


/*   function SuppPrenom(noms) {
    let prenom;
  
    do {
      prenom = prompt("Entrez un nom à supprimer ou cliquez sur annuler pour arrêter:");
  
      if (prenom === "") {
        alert("Vous devez entrer un nom.");
        continue;
      }
  
      let NouveauxNoms = noms.filter((name) => name.toLowerCase() === prenom.toLowerCase());
  
      if (NouveauxNoms.length === 0) {
        alert("Le nom entré n'a pas été trouvé dans la liste. Veuillez entrer un nouveau nom.");
        continue;
      }
  
      NouveauxNoms = noms.filter((name) => name.toLowerCase() !== prenom.toLowerCase());
      console.log("Le nom " + prenom +  " a été supprimé de la liste.");
      return NouveauxNoms;
  
    } while (true);
  }
  
  function Tableau() {
    let Base = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane", "Plouf", "Marcel"];
    let MiseAJour = SuppPrenom(Base);
    console.log("Nouveaux noms:");
    console.log(MiseAJour);
  }
  
  Tableau(); */


  /* Exercice 4 */



  /* calculer le prix à payer */
function calculerPrixAPayer(pu, qtecom) {

    /* total avant remise */
    let total = pu * qtecom;
  
    /* remise */
    let remise;
    if (total >= 100 && total < 200) {
      remise = total * 0.05;
    } 
    else if (total >= 200) {
      remise = total * 0.1;
    } 
    else {
      remise = 0;
    }
  
    /* total après remise */
    let totalApresRemise = total - remise;
  
    /* coût de livraison */
    let coutLivraison;

    if (totalApresRemise > 500) {
      coutLivraison = 0;
    } 
    else {
      coutLivraison = totalApresRemise * 0.02;
    }
  
    /* coût de livraison minimum */
    if (coutLivraison < 6) {
      coutLivraison = 6;
    }
  
    /* calucul prix à payer */
    let prixAPayer = totalApresRemise + coutLivraison;
  
    /* retour prix à payer */
    return {
        prixTotal: prixAPayer,
        remise: remise,
        coutLivraison: coutLivraison
    };
}

/* prix unitaire */
let prixUnitaire = prompt("Entrez le prix unitaire :");

/* vérification nombre */
if (isNaN(prixUnitaire)) {
    alert("Merci d'entrer un prix unitaire valide.");
} 
else {
    /* quantité */
    let qteCommandee = prompt("Entrez la quantité commandée :");

    /*  vérification nombre */
    if (isNaN(qteCommandee)) {
        alert("Merci d'entrer une quantité commandée valide.");
    } else {
        /* calcul prix à payer */
        let prixAPayer = calculerPrixAPayer(parseFloat(prixUnitaire), parseFloat(qteCommandee));

        /* résultat */
        let message = "Le prix à payer est " + prixAPayer.prixTotal.toFixed(2) + " €.\n";
        message += "Remise : " + prixAPayer.remise.toFixed(2) + " €.\n";
        message += "Frais de port : " + prixAPayer.coutLivraison.toFixed(2) + " €.";
        alert(message);
    }
}

