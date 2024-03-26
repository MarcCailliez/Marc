/* exercice evenements */

/* / Exercie 1 */

/* const bouton = document.getElementById('cont');


bouton.addEventListener('click', () => {
    const txt = document.getElementById('texte').value;
  alert('Vous avez entré le texte : ' + txt);
});
 */
/* Exercice 2 Nombre magique */

let min = 1;
let max = 1000;
let coup = 0;
let random = Math.floor(Math.random() * (max - min)) + min;

function verif() {
  let n = document.getElementById("textBox1").value;
  if (random == n) {
    coup++;

    alert("Bravo !! Vous avez trouvé le numéro mystère qui est : " +random +" en " +coup +"coups.");
  } else if (random < n) {
    alert("Plus petit ! Essai encore ! ");
    coup++;
  } else {
    alert("Plus grand !! Essai encore !");
    coup++;
  }
}

console.log(random);
