// ### La déclaration 
const nb = 42;
const pi = 3.14;

console.log(`La valeur ${nb} est de type '${typeof(nb)}'`)
console.log(`La valeur ${pi} est de type '${typeof(pi)}'`)


// ### Conversion vers le type "number"
// - parseInt
const valueText1 = '42';
const valueNb1 = parseInt(valueText1);
console.log(`La valeur1 est : ${valueNb1}`);

// - parseFloat
const valueText2 = '3.14';
const valueNb2 = parseFloat(valueText2);
console.log(`La valeur2 est : ${valueNb2}`);

// - Cas particulier
const valueText3 = '3,14';  // La saisie peut être corrigé via ".replace(',', '.')"
const valueNb3 = parseFloat(valueText3);
console.log(`La valeur3 est : ${valueNb3}`);

const valueText4 = '42Test22';
const valueNb4 = parseInt(valueText4);
console.log(`La valeur4 est : ${valueNb4}`);



// ### La valeur prédéfini « NaN » -> Not a Number
const valueTest = parseInt('Zaza Vanderquack !');
console.log(`La valeur test est : ${valueTest}`);

console.log(`Le type de NaN est... ${typeof(NaN)}`);
// Un valeur de type 'number' qui indique que le nombre n'est pas valide


// La valeur « NaN » ne doit jamais être tester avec une egalité 
// -> Celle-ci sera toujours false
parseInt(42) === NaN        // false
parseInt("Test") === NaN    // false
NaN === NaN                 // false

// Pour tester cette valeur, il FAUT utiliser la méthode « isNaN() »
isNaN(parseInt(42))
isNaN(parseInt("Test"))
isNaN(NaN)


// ### La valeur infinity

// Une valeur de type nombre en dehors de la plage définies
// -> Valeur mathematique

const t1 = 42 / 0  // Infinity


// ### Les operations 

// - Calcul
const addition = 42 + 3;            // 45
const soustraction = 22 - 3;        // 19
const multiplication = 22 * 2;      // 44
const divisionReel = 5 / 2;         // 2.5
const divisionEntier1 = parseInt(5/2);  // 2
const divisionEntier2 = Math.floor(5/2) // 2
const modulo = 5 % 2;               // 1
const puissance1 = 5 ** 2;          // 25
const puissance2 = Math.pow(5, 2);  // 25

// L'affection -> L'operateur « = » avec un operateur de calcule
let nb1 = 42;
nb1 += 5;       // Raccourci de :  nb1 = nb1 + 5

// L'incrementation et la décrementation
console.log("incrementation / décrementation");
let count = 1;          // Afficher    Reel 
console.log(count++);   //  1           2   
console.log(++count);   //  3           3
console.log(count--);   //  3           2
console.log(--count);   //  1           1