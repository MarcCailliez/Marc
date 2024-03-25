/* Exercice fonction 1 */
/*  let x = Number (prompt("Entrer un nombre"));
let y = Number (prompt( "entrer un multiplicateur"));
var resultat = produit(x, y);
var carre = produit(x, x)

function produit(x, y){
    return x* y;
}
function produit(x, x){
    return x* x
}

let div_affichage = document.querySelector("#affichage");
let div_ligne1 = document.querySelector("#ligne1");
div_ligne1.innerHTML = "le cube de : "+x+" est égal à : "+carre
div_affichage.innerHTML = " le produit est égal à : " + resultat 
 */
/* pas utile du tout  */
/* const image = new Image()
image.src = "papillon.jpg";
image.onload = function(){ 
     document.body.appendChild(image)
}
 */

/* Exercice 2 */

var strtok = (str1, str2, 3)
var str1 = "robert dupont amiens 80000"
var str2 = ";"
str1 = "robert"+str2+"dupont"+str2+"amiens"+str2+"80000"


console.log( str1.split(str2));
console.log (str1.slice(13, 20))