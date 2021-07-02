'use strict';

/* ### Les collections -> Set (ES2015) ### */
// Ensemble de donnée unique

// - Déclaration
const tabValeur = ['Patrick', 'Gabriel', 'Marie', 'Gabriel']
const monEnsemble0 = new Set(tabValeur);
console.log("Set avec donnée ", monEnsemble0);

const monEnsemble = new Set();
console.log("Set initial ", monEnsemble);

// - Ajouter des elements
monEnsemble.add(5);
monEnsemble.add(10);
monEnsemble.add(42);
monEnsemble.add(5);
monEnsemble.add(-5);
console.log("Après l'ajout", monEnsemble);

// - Retirer un element
monEnsemble.delete(42);
console.log("Après la suppression", monEnsemble);

// - Tester si un element existe
const t1 = monEnsemble.has(5);
console.log(`Contient la valeur 5 : ${t1}`);

const t2 = monEnsemble.has(42);
console.log(`Contient la valeur 42 : ${t2}`);

// - Obtenir la taille
console.log(`La taille de l'ensemble est ${monEnsemble.size}`);

// - Obtenir un iterable avec les données de l'ensemble
const iterableEnsemble = monEnsemble.keys()
console.log('L\'ensemble sous forme de iterable', iterableEnsemble);

// - Recréer un tableau avec les données du Set
const tabEnsemble = Array.from(monEnsemble);
console.log('L\'ensemble sous forme de tableau', tabEnsemble);
console.log('');




/* ### Les collections -> Map (Es2015) ### */
// Ensemble d'element sous la forme de clef et valeur

// - Déclaration
const tabClefValeur = [['Clef1', 'Zaza'], ['Clef2', 'Donald'] ];
const dicoAvecValeur = new Map(tabClefValeur);
console.log(dicoAvecValeur);

const dico = new Map()
console.log('Map initial', dico);

// - Ajout
dico.set('d1', 'Riri Duck');
dico.set('b1', 'Hello World');
dico.set('d2', 'Donald Duck');
dico.set('z1', 'Zaza Vanderquack');
console.log('Après l\'ajout', dico);

dico.set('b1', 'Balthazar Picsou');
console.log('Après l\'ajout d\'un double', dico);

// - Suppression
dico.delete('d2');
console.log('Après la suppression', dico);

// - Tester si la clef est présente
const t3 = dico.has('z1');
console.log(`Contient la clef 'z1' : ${t3}`);

// - Récuperer
const zaza = dico.get('z1');
console.log(`L'element avec la clef 'z1' est ${zaza}`);
console.log('');


// Bonus - Dico avec des objets (cf : Demande de patrick)
const dicoStudent = new Map();

dicoStudent.set('e1', {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
    result: 20
});

dicoStudent.set('e2', {
    firstname: 'Riri',
    lastname: 'Duck',
    result: 11
});

dicoStudent.set('e3', {
    firstname: 'Loulou',
    lastname: 'Duck',
    result: 1
});

console.log(dicoStudent);

const eleve = dicoStudent.get('e1');
console.log(eleve);
console.log(`L'eleve ${eleve.firstname} ${eleve.lastname} à`
            + `un resultat de ${eleve.result} / 20 !`);