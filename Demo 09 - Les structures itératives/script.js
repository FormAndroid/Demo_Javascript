// ### Les boucles "à condition"

// while : On check la condition et ensuite on fait le traitement
console.log(' - While');
let count1 = 1;
while(count1 < 10) {
    console.log(count1);

    count1++;
}
console.log('');

// do..while : On effectue le traitement et ensuite en check la condition
console.log(' - do..while');
let count2 = 1;
do {
    console.log(count2);

    count2++;
}
while(count2 < 10);
console.log('');

// for : C'est un boucle while avec un initialisation, une condition et une incrementation
console.log(' - for');
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('');
// Etape : 1) Initialisation
//         2) Verification de la condition
//         3) Execution du bloc de code
//         4) Execute l'incrementation
//         5) -> Repartir à l'etape 2


// ### Les boucles "de collection"
//     -> Travaille sur une variable

const tab = ['Riri duck', 'Zaza Vanderquack', 'Baltazar Picsou']

// for in (Avant ES2015)
//  Elle parcourt les clefs (sous format string) de la cible
console.log(' - for in');
for(const index in tab) {
    const elem = tab[index];
    console.log(`L'index ${index} (${typeof(index)}) -> ${elem}`);
}
console.log('');

// for of (Depuis 2015)
//  Elle parcourt les elements des objets iterables
console.log(' - for of');
for(const elem of tab) {
    console.log(elem);
}
console.log('');

// foreach -> Accessible depuis une collection
console.log(' - array.foreach');
tab.forEach((value, index) => {
    console.log(`La valeur est ${value} et l'index est ${index}`);
});
console.log('');