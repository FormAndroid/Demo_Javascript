/* ### Les collections indexées ### */
const tableauVide = [];

const students = ['Marie', 'Gabriel'];
console.log('Initial', students);

// Les méthodes d'ajout
// - à la fin
students.push('William');
students.push('Nico', 'Zaza', 'Ann', 'Fifi','Amine', 'Donald');
console.log('Après "push"', students);
// - au debut
students.unshift('Gianni');
students.unshift('Balthzar', 'Isaac', 'Perrine')
console.log('Après "unshift"', students);
// - via l'index
students.splice(1, 0, 'Stefan');
console.log('Après "splice" d\'ajout', students);

// Les méthode de retrait
// - à la fin
students.pop();
console.log('Après "pop"', students);
// - au debut
students.shift();
console.log('Après "shift"', students);
// - via l'index
students.splice(8, 1);
console.log('Après "splice" de supp', students);

// Obtenir l'index d'un element
const indexFifi = students.indexOf('Fifi');
console.log(`L'index de 'Fifi' est ${indexFifi}`);

// Méthode d'ajout et de suppression
students.splice(indexFifi, 1, 'Khadija', 'Patrick');
console.log('Après le "splice" complet', students);
console.log('');


const letters = ['A', 'Z', 'R', 'C', 'E'];
console.log("Initial", letters);

// Utilisation de l'operateur d'acces

// - Recuperer un element
const elem1 = letters[1];
console.log(`L'element en index "1" est "${elem1}"`);

// - Modifier un element
letters[2] = "M";
console.log("Après la modification de l'index 2", letters);

// - Recuperer en dehors de la collection
const elem2 = letters[10];
console.log(`L'element en index "10" (hors zone) est "${elem2}"`);

// - Ajout d'un element via l'index
console.log(`La taille du tableau "letters" est ${letters.length}`);
letters[15] = "I";
console.log('Après l\'ajout à l\'index 15', letters);
console.log(`La taille du tableau "letters" est ${letters.length}`);

console.log('Attention, les elements "vide" sont parcouru');
for (const l of letters) {
    console.log(l);
}
console.log('');

// Quelques méthodes

// - Transformation en chaine de caractere (Séparateur par default ",")
const tableauEnString = letters.join(' > ');
console.log(tableauEnString);

// - Transformation qui permet d'inverser la collection
const numbers = [1, 3 , 5, 9];
console.log("Base", numbers);
numbers.reverse();  // Attention, ca modifie le tableau
console.log("Reverse", numbers);
console.log('');

// - Découpe
const people = ['Zaza', 'Riri', 'Balthazar', 'Archiblad',' Loulou', 'Della'];
console.log('Les personnes', people);
// La méthode slice renvoie une copie du tableau sans le modifier

const select1 = people.slice(3);
console.log('Avec un "slice(3)"', select1);

const select2 = people.slice(1, 2);  // Indice 1 -> 2 (non inclu)
console.log('Avec un "slice(1, 2)"', select2);

const select3 = people.slice(1, 4);  // Indice 1 -> 4 (non inclu)
console.log('Avec un "slice(1, 4)"', select3);
console.log('');


// - Le trie
// Sans parametre -> Il trie comme une chaine de caractere
const tab1 = [2, 9, 3, 1, 42, 5];
console.log('Trie 1 - Initial', tab1);
tab1.sort()
console.log('Trie 1 - Après le trie', tab1);

// Il est possible de lui donnée une fonction pour determiner l'ordre
const tab2 = [6, 9, 1, 10, 20, 100, 5];
console.log('Trie 2 - Initial', tab2);
tab2.sort((valA, valB) => { return valA - valB })
console.log('Trie 2 - Après le trie', tab2);

// L'ordre inverse (Ecrirure lambda)
const tab3 = [10, 6, 30, 100, 1, 5, 2, 11];
console.log('Trie 3 - Initial', tab3);
tab3.sort((valA, valB) => valB - valA)
console.log('Trie 3 - Après le trie', tab3);
console.log('');


// - Fusion des tableaux
const p1 = ['Riri', 'Fifi', 'Loulou'];
const p2 = ['Donald', 'Daisy'];
const p3 = ['Zaza', 'Balthazar', 'Della'];

const pFusion1 = p1.concat(p2).concat(p3);
console.log(pFusion1);

const pFusion2 = [].concat(p1, p2, p3);
console.log(pFusion2);

const pFusion3 = [...p1, ...p2, ...p3];
console.log(pFusion3);

// - Encore plus de méthode sur la doc ;)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
