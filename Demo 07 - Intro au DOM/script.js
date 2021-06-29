// L'objet "document" permet d'intergagir avec la page Web
console.log(document);

// La méthode « getElementById » permet de recuperer un element
const demo1 = document.getElementById('demo1');
console.log(demo1);

// Alternative, la méthode « querySelector » permet d'utiliser les selecteurs CSS
//  pour obtenir un élément du DOM (le 1er correspondant)
const demo2 = document.querySelector('#demo2');
console.log(demo2);
console.log('');

// Récuperation d'information d'une balise
console.log(`L'id est '${demo1.id}'`);
console.log(`La classe est '${demo1.className}'`);
console.log(`Le contenu est '${demo1.innerHTML}'`);
console.log('');

// Modification des classes d'une balise
demo1.className = 'green'
console.log(`La nouvelle classe est '${demo1.className}'`);
console.log('');

// Modification du contenu de la balise
demo2.innerHTML = 'Bruxelles';

// Interaction sur les classe via le "classList"
console.log('ClassList initial', demo2.classList);
console.log(`ClassName initial: '${demo2.className}'`);
demo2.classList.add('pink');
demo2.classList.add('bold');
console.log('ClassList final', demo2.classList);
console.log(`ClassName final: '${demo2.className}'`);


// Interaction avec l'utilisateur avec une modification du DOM
const nb1 = parseFloat(prompt('Veuillez entrer un premier nombre'));
const nb2 = parseFloat(prompt('Veuillez encoder le 2e nombre'));

const total = nb1 + nb2;

const result = document.getElementById('resultat');
result.innerHTML = `L'addition de ${nb1} et ${nb2} donne ${total}`;