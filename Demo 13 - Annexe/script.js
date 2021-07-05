// Les variables
//  - Dynamique
//  - Affecter automatiquement selon le contenu
//  - Une variable peu changer de type (non conseillé)

//  - La déclaration est composé
//      • Une Nature (var / let / const)
//      • Un Nom     (lowerCase)
//      • Une valeur (obligatoire pour les "const")

//  - Les types
const number = 42;      // Une constante locale de type number

let duTexte = 'Hello';  // Une variable locale de type string

let unBooleen = true;

const objet = {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
    age: 16,
    result: 18.5
};

const tableau = [42, 13, 5, -42];

/**********************************************************************/

// Le destructuring
//  - Permet de décomposé un objet ou un tableau sous forme de variable simple

//  - Exemple avec un objet
const marie = {
    firstname : 'Marie',
    lastname: 'Thielens',
    hobby: 'La course'
};

// Récuperation du firstname et lastname de maniere classique
// const firstname = marie.firstname;
// const lastname = marie.lastname;

// Récuperation du firstname et lastname via le destructuring
//  -> Sur un objet, la récuperation est basé sur le nom
const {firstname, lastname} = marie;


//  - Exemple avec un tableau
const people = ['Riri', 'Zaza', 'Della', 'Donald', 'Daisy'];

// Récuperation des elements de maniere classique
// const child1 = people[0];
// const child2 = people[1];
// const other = people.slice(-3)

// Récuperation des elements via le destructuring et l'operateur 'Rest'
//  -> Sur un tableau, la récuperation est basé sur les position
const [child1, child2, ...pat] = people;
// console.log(child1);
// console.log(child2);
// console.log(pat);

/**********************************************************************/

// L'operateur "Spread"
// Permet de découpé une variable

let students = ['Stephan', 'Marie', 'Patrick'];

// - Ajout d'une element au debut d'un tableau
students = ['Perrine', ...students];
console.log(students);

// - Ajout d'une element à la fin d'un tableau
students = [...students, 'Gabriel'];
console.log(students);


// - Exemple d'utilisation avec des fonctions
// La fonction "max" s'attent à recevoir une serie de "number"
const m1 = Math.max(4, 5, 3, 10, -5);
console.log(m1);

const nbs = [5, 3, 1, 42, -5, 10, -50];

// Par contre, elle ne s'attend pas a avoir un tableau -> Génere la valeur 'NaN
const m2 = Math.max(nbs);
console.log(m2);

// L'operateur "Spread" permet de décomposé le tableau pour envoyer les valeurs
const m3 = Math.max(...nbs);
console.log(m3);
