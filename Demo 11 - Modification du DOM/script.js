const container = document.getElementById('container');
console.log(container);

// Obtenir les elements d'une balise
const elements = container.children;
console.log('Tout les elements', elements);
console.log('Index 1', elements[1]);

// Obtenir le premier ou le dernier element
const firstElement = container.firstElementChild;
console.log('Premier', firstElement);

const lastElement = container.lastElementChild;
console.log('Dernier', lastElement);


// Créer une balise HTML depuis le Javascript
const baliseZaza = document.createElement('p');
baliseZaza.id = 'zaza';
baliseZaza.innerHTML = 'Zaza Vanderquack';
console.log(baliseZaza);


// Ajouter une balise dans la page web (a la fin)
container.appendChild(baliseZaza)


// Ajouter dans une position (avant Della)
const balisePicsou = document.createElement('p');
balisePicsou.id = "balthazar";
balisePicsou.innerHTML = "Balthazar Picsou";
console.log(balisePicsou);

const della = document.getElementById('della');
console.log(della);

container.insertBefore(balisePicsou, della);


// Supprimer une balise
const donald = document.getElementById('donald');
container.removeChild(donald);