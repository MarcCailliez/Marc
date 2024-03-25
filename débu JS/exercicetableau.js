/* Exercice 1  */


let taille = parseInt(prompt("Entrez la taille du tableau :"));

if (isNaN(taille) || taille < 1) {
    alert("La taille du tableau doit être un nombre entier positif.");
} else {
    let tableau = [];

    for (let i = 0; i < taille; i++) {
        let valeur = parseInt(prompt("Entrez la valeur " + (i + 1) + " :"));

        if (isNaN(valeur)) {
            alert("Les valeurs du tableau doivent être des nombres entiers.");
            break;
        } else {
            tableau.push(valeur);
        }
    }
    console.log(tableau);
    console.log("la taille du tableau est "+taille)
}