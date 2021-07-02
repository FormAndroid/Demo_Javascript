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



















/* ### Les collections -> Map ### */