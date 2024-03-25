/* objet natif */

/* let taille = parseInt(prompt("Entrez la taille du tableau :")); */ //taille du tableau
/* let sum = 0;
let count = 0;
 */
/* if (isNaN(taille) || taille < 1) {
    alert("La taille du tableau doit être un nombre entier positif.");
} else { */
  /*   let tableau = []; */
/*
    for (let i = 0; i < taille; i++) {
        let valeur = window.prompt("Entrez la valeur " + (i + 1) + " :");

        if (isNaN(valeur || valeur === 0)) {
            alert("Les valeurs du tableau doivent être des nombres entiers.");
            break;
        } else {
            tableau.push(valeur);
        }
        /* if (integer !== 0 && !isNaN(integer)) {
            sum += integer;
            count++;
          } else if (integer !== 0) {
            break;
          } */
        
    
    


    /*console.log(tableau);*/
    /* alert(`Somme : ${sum}\nMoyenne : ${sum / count}`+ "vous avez saisi : "+i+" valeurs" );*/


    /* 2eme essai  */
/* let sum = 0
let count = 0
let i
let taille = 0

let tableau [];

while (true) {
    const num = window.prompt("Veuillez entrer un entier (0 pour arrêter):");
    const integer = parseInt(num);

    if (integer === 0 && !isNaN(integer)) {
        sum += integer;
        count++;
      } else if (integer === 0) {
        break;
      }
      
} */

/* 3eme essai */

/* let sum = 0
let count = 0
let i = 0

while (n !== 0){
    let n = window.prompt("entrez une valeur :"+ i+1);
    let tableau = [];
    tableau.push(n);
    sum += n;
    count ++,
    else {
        break;
    }
    console.log(tableau)
    alert(`Somme : ${sum}\nMoyenne : ${sum / count}`+ "vous avez saisi : "+i+" valeurs" )
} */

/* 4eme essai */

let sum = 0;
let count = 0;
let tableau = [];

while (true) {
    let n = parseFloat(window.prompt("Entrez une valeur numérique (" + (count + 1) + "/saisie stoppée à 0) :"));

    if (isNaN(n) || n === 0) {
        break;
    }

    tableau.push(n);
    sum += n;
    count++;
}

if (count > 0) {
    console.log("Vous avez saisi " + count + " valeur(s) :");
    console.log("Somme : " + sum);
    console.log("Moyenne : " + (sum / count));
} else {
    console.log("Aucune valeur n'a été saisie.");
}
