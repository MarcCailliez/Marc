
/* Exercice 1 */

/* var prenom
var i = 1

while (prenom !=0) {


prenom = prompt ("Saissisez le prénom N°"+i+"ou Clic sur Annuler pour arrêter la saisie");

console.log("Le prénom numéro :" +i+ ", est : "+prenom );

i++


} */
/* Réponse ( avec ma participation quand meme au final) */
/* var prenom

var i = 1


while (prenom !== null && prenom !=0) {


  prenom = prompt("Saisissez le prénom N°" + i + " ou Clic sur Annuler pour arrêter la saisie");


  if (prenom !== null) {

    console.log("Le prénom numéro :" + i + ", est : " + prenom);

    i++;

  }

} */

/* Exercice 2  */

/* let N = Number(prompt("entrez un nombre non négatif"));

while (N>0) {
    if(N==0){
        break;
    }
    console.log(N);
    N--;
}  */

/* Exercice 3 */

/* var N = Number 
var i = 1
var Somme = Number
var moyenne = Number
var moyenne = 0

while (N != 0){

    if (N==0){
        break;
    }

    N = prompt ("Saissiez un nombre entier ou Saissiez 0 pour arrêter la saisie")

    Somme = Somme + N

console.log(N)
console.log(Somme)
} */

 let sum = 0;
let count = 0;
let promptMessage = "Veuillez entrer un entier (0 pour arrêter):";

while (true) {
  const num = prompt(promptMessage);
  const integer = parseInt(num);

  if (integer !== 0 && !isNaN(integer)) {
    sum += integer;
    count++;
  } else if (integer !== 0) {
    break;
  }

  promptMessage = `Veuillez entrer un entier (0 pour arrêter):\nSomme : ${sum}\nMoyenne : ${sum / count}`;
}

alert(`Somme : ${sum}\nMoyenne : ${sum / count}`);  

/* Exercice 4  */

/* let X = Number(prompt("Entrez le nombre que vous voulez multipliez"));
let N = Number(prompt("Entrez le nombre de la table maximum"));
let resultat;
var i = 1

do 
{
    resultat = X * i
    console.log ( resultat)
    i++
} while ( i <= N);
console.log("fin") */

/* Exercice 5 */

/* function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase();
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  const userWord = prompt('Entrez un mot:');
  alert('Nombre de voyelles dans " ' + userWord + ' ": ' + countVowels(userWord)); */

/*   function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let start = 0;

  while (start < word.length) {
    const subword = word.substring(start, start + 1);
    const index = vowels.indexOf(subword.toLowerCase());
    if (index !== -1) {
      count++;
    }
    start++;
  }

  return count;
}

const userWord = prompt('Entrez un mot:');
alert('Nombre de voyelles dans " ' + userWord + ' ": ' + countVowels(userWord)); */