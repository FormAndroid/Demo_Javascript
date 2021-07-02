'use strict';
// Déclaration d'une fonction
// - Déclaration de "base" (syntaxe historique)
function maFonction1() {
    console.log("Ma super fonction <3");
}

// Il est possible de créer une fonction dans une variable
// cela permet de les proteger en ecriture via le mot clef "const"

//  ### Procedure ###
const maFonction2 = function() {
    console.log("Fonction créer via une variable");
}
 
// - Ecriture d'une fonction fléchée
const maFonction3 = () => {
    console.log("Bonjour!");
}

//  ### Fonction avec retour ###
const maFonction4 = function() {
    return "Voici du text";
}

const maFonction5 = (a, b) => {
    return a + b;
}

// - Ecriture d'une fonction lamdba
const maLambda = (a, b) => a + b;

/***************************************************************/

// Appel d'une fonction 
maFonction1();
maFonction2();
maFonction3();
maFonction4();

const r1 = maFonction5(1, 2);
console.log(r1);

const r2 = maLambda(5, 3);
console.log(r2);

/***************************************************************/

// Les parametres
const maFonctionAvecParam = function(nb1, nb2) {
    console.log(`Les valeurs sont ${nb1} et ${nb2}`);
}

maFonctionAvecParam(40, 2);
maFonctionAvecParam(10);
maFonctionAvecParam(10, 3, 50, 30, 10, 5);


// L'objet "arguments"  => Déconseillé car l'ES2015 est sortie ;) 
const maFonctionArgument = function() {
    console.log(arguments);
}
maFonctionArgument(42, 5, 6, 1);


// L'operateur rest (=> Permet d'eviter "arguments")
//      Syntaxe: ...
//      Limitation: Un seul par fonction !
//      Objectif: Générer un tableau de parametre
const maFonctionRest = function(nb1, ...nbs) {
    console.log('Parametre nb1', nb1);
    console.log('Parametre nbs', nbs);

    let total = nb1;
    for(const v of nbs) {
        total += v;
    }
    return total;
}

const r3 = maFonctionRest(4, 5, 3, 1, 6, 0, 5, 0)
console.log(r3);


// Les parametres optionnels
const maFonctionAvecOption = function(nb1, nb2, nb3 = 0) {
    console.log(`Valeur des params : ${nb1}, ${nb2} et ${nb3}`);

    return nb1 + nb2 + nb3;
}

maFonctionAvecOption(1, 2, 3);
maFonctionAvecOption(22, 20);