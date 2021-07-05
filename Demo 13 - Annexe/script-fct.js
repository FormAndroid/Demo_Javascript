// Fonction en tant que "procedure"
const uneProcedure = function () {
    console.log('Ceci est une procedure');
    console.log('Elle ne renvoie pas de donnée !');
}
uneProcedure();
console.log('');

// Fonction avec retour de contenu
const uneFonctionAddition = function (nb1, nb2) {
    const resultat = nb1 + nb2;
    // Utilisation du mot clef "return" pour renvoyer le resultat
    return resultat;
}
const r1 = uneFonctionAddition(22, 20);
console.log(`Le resultat de la fonction est ${r1}`);
console.log('');

/**********************************************************************/

// - Les parametres 
const puissance = function (nb, exp) {
    const result = nb ** exp;
    return result;
}
console.log(' - Puissance');

const p1 = puissance(10, 2);
// Resultat p1 -> 100
console.log(p1);

const p2 = puissance(2, 2, 2);
// Resultat p2 -> 4. Le dernier argument n'est pas utiliser
console.log(p2);

const p3 = puissance(5);
// Resultat p3 -> NaN. Car la valeur de nb2 est 'undefined'
console.log(p3);
console.log('');

// - Les parametres optionnels
// Parametre déclaré dans la fonction avec une valeur par defaut
const multiplication = function (nb1, nb2 = 0, nb3 = 1) {
    const result = nb1 * nb2 * nb3;
    return result;
}
console.log(' - Multiplication');

const m1 = multiplication(2, 2, 2);
// Resultat m1 -> 8.
console.log(m1);

const m2 = multiplication(2, 5);
// Resultat m2 -> 10.
console.log(m2);

const m3 = multiplication(42);
// Resultat m3 -> 0.
console.log(m3);

const m4 = multiplication(2, 2, undefined);
// Resultat m4 -> 4.
console.log(m4);

const m5 = multiplication(2, 2, null);
// Resultat m5 -> 0. Car la valeur 'null' ecrase la valeur par defaut !!!
console.log(m5);
console.log('');


// - Le parametre "Rest"
//   Permet d'envoyer un nombre non-défini de valeur qui seront stocker
//   dans une variable de type "tableau". Le parametre "Rest" est unique
const addition = function (nb1, nb2 = 0, ...pleinDeNombre) {
    let result = nb1 + nb2;

    for (const nb of pleinDeNombre) {
        result += nb;
    }

    return result;
}
console.log(' - Addition');


const a1 = addition(13, 2);
// Resultat a1 -> 15
console.log(a1);

const a2 = addition(5, 3, 12, 3, 1, 5, 2, 2, 3, 1, 3, 0, 3);
// Resultat a2 -> 43. Toutes les valeurs à partir de la 3e sont stocker dans le tableau
console.log(a2);


const t1 = [4, 3, 10];
const a3 = addition(10, 0, t1);
// Resultat a3 -> Incorrect. Car l'operateur rest crée un tableau qui contient le tableau 't1'
console.log(a3);

const a4 = addition(10, 0, ...t1);
// Resultat a4 -> 27 
console.log(a4);


const s1 = [4, 3, 10];
const s2 = [5, 1, 11];
const s3 = [6, -9, 1];

const a5 = addition(...s1, ...s2, ...s3);
// Resultat a5 -> 32. nb1 -> 4, nb2 -> 3, rest -> la totalité des nombres restants 
console.log(a5);