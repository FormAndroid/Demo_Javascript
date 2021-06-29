// ### Déclaration d'un booléen
//  -> 2 etats logique

const valeurVrai = true;
const valeurFaux = false;


// ### Notion de « truthy » et de « falsy »

// Les valeurs "Truthy" sont "vrai" quand elle sont evaluer dans un context de booléen
// https://developer.mozilla.org/fr/docs/Glossary/Truthy

// Les valeurs "Falsy" sont "faux" quand elle sont evaluer dans un context de booléen
/* Liste des valeurs :
    false
    0, -0, 0n
    null
    undefined
    NaN
    Chaine de caractere vide 
   https://developer.mozilla.org/fr/docs/Glossary/Falsy
*/

let valeurTest = 42;

if(valeurTest) {
    console.log(`${valeurTest} (${typeof(valeurTest)}) est considéré comme "vrai"`);
}
else {
    console.log(`${valeurTest} (${typeof(valeurTest)}) est considéré comme "faux"`);
}



// ### Les opérateurs de comparaison

// - Egalité avec un double symbole : « == » et « != »
//   Il vérifie le uniquement contenu (conversion implicite utilisé)
//  https://i.pinimg.com/originals/34/95/54/349554f1b2e9eb238144bfc2966d8cb8.jpg

// - Egalité avec un triple symbole : « === » et « !== »
//   Il vérifie le type de la variable et ensuite le contenu



// ### Les opérateurs logiques

// - Ou (Or):         « || »
// - Et (And):        « && »
// - Negation (Not):  « ! »


// La javascript effection des comparaison "fénénante"
const obj = null;
const t1 =  (obj != null) && (obj.demo == 42);
console.log(`La réponse est... ${t1}`);

// Utilisation de la notion 'truthy' et 'falsy' 
const t2 =  !!obj && (obj.demo == 42);
console.log(`La réponse est... ${t2}`);

// Note: l'utilisation de « !! » permet de convertir une variable en booléen

