// La déclaration
const today = new Date();
console.log(today);
// Attention "Date.now()" renvois un timestamp

// Le 1er Janvier 2021
const d1 = new Date(2021, 0, 1);    // Index de 0 -> 11 pour les mois
console.log(d1);


// Les méthodes
const annee = today.getFullYear();
console.log(annee);

const mois = today.getMonth() + 1;
console.log(mois);

const jour = today.getDate();
console.log(jour);

const jourDeSemaine = today.getDay();
console.log(jourDeSemaine);


const dateFormatFr = today.toLocaleDateString('fr-BE');
console.log(dateFormatFr);


const dateFormatter = today.toLocaleString('fr-BE', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
});

// Plus encore https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
