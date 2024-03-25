
alert/* ("mon premier script en javascript !") */ ("tu est bo mec");
{/* </script>
<!-- <script>
var nom
var prenom
nom = prompt("Saisissez votre nom")
prenom = prompt("Saisissez votre prénom")
alert(nom)
alert(prenom)

</script> -->

<!--    <script>
var x
var y
x = prompt ("saississez un nombre")
y = prompt ("saississez un deuxime nombre")
alert (x*y)
</script>
-->

<!-- <script>
var C
C = prompt ("saissisez la température en celcius")
alert ( F = (C*9/5) + 32)
</script>
-->
 */}

 /* Exercie cours opérateur */

/* var a = 100;
let b = 100;
let c = 1.00;
let d = true;
alert ("Ceci est une chaîne de caractères:"+a)

a = b--;
alert(b);

alert (c+a);

d=!d
alert (d) */


/* Cours 5 les conditions */
/* exercice 1  */
/*

let nombre = (prompt("Entrez un nombre :"));

if (nombre % 2 == 0) {
    
    alert("Le nombre est pair.");
} else {
   
    alert ("Le nombre est impair.");
}
 */

/* Exercide 2 */ 

/* let age = (prompt("Entrez votre année de naissance :"));

let annee= 2024

age = annee - age

if (age>18) {

    alert (age + "ans , Vous êtes majeur")

} */ /* Pour m'amuser  */

/* else if (age<0) {
    alert (age + "ans , vous venez du futur")
}

else {
    alert (age + "ans, Vous êtes mineur")
}  */
  
 

/* Exercie 3  */



  let num1 = Number(prompt("Entrez le premier nombre"))
let num2 = Number(prompt("Entrez le deuxième nombre"))
let op =  (prompt ("Entre un opérateur parmi ceuxi-ci : +, - , *, /"))
let resultat;

/*  if (op !=='+' && op !=='-' && op !== '*'  && op !== '/' ){

    
} */
 

 if (op === '+') {
    resultat = num1 + num2;
} else if (op === '-') {
    resultat = num1 - num2;
} else if (op === '*') {
    resultat = num1 * num2
} else if (op === '/' && num2 != 0) {
    resultat = num1 / num2
    
} else {
    alert ("Votre opérateur est erroné ! Veuillez rentrer un opérateur valide !")
}
 
alert (resultat)


/* Reponse du site  */
  // Demander à l'utilisateur le premier nombre et le convertir en nombre
/* let num1 = Number(prompt("Entrez le premier nombre")); */

// Demander à l'utilisateur le deuxième nombre et le convertir en nombre
/* let num2 = Number(prompt("Entrez le deuxième nombre")); */

// Demander à l'utilisateur un opérateur et le convertir en chaîne de caractères
/* let op = prompt("Entre un opérateur parmi ceux-ci : +, - , *, /"); */

// Effectuer l'opération arithmétique en fonction de l'opérateur
/* let resultat;
if (op === '+') {
  resultat = num1 + num2;
  alert (resultat) */
/* } else if (op === '-') {
  resultat = num1 - num2;
} else if (op === '*') {
  resultat = num1 * num2;
} else if (op === '/') {
  resultat = num1 / num2;
} else {
  resultat = 'Operateur invalide';
}

// Afficher le résultat
alert(`Resultat : ${resultat}`); */
 /* } */


 /* cours sur les boucles  */


 