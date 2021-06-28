// Déclaration d'une chaine de caracteres
const msg1 = "Hello";
const msg2 = 'World';
const msg3 = `Last !`;

console.log(msg1);
console.log(msg2);
console.log(msg3);


// La concaténation
const firstname = 'Zaza';
const lastname = 'Vanderquack';

// - L'opération « + »
const desc1 = 'Le personnage s\'appelle ' + firstname + ' ' + lastname + ' !';

// - La méthode « .concat » du type String
const intro = 'Le personnage s\'appelle';
const desc2 = intro.concat(' ').concat(firstname).concat(' ').concat(lastname).concat(' !');
const desc3 = intro.concat(' ', firstname, ' ', lastname, ' !'); 
const desc4 = ''.concat(intro, ' ', firstname, ' ', lastname, ' !');

// - L'utilisation du « Template string »  -> Fonctionne avec les back-tick « ` »
const desc5 = `Le personnage s'appelle ${firstname} ${lastname} !`;


console.log(desc1);
console.log(desc3);
console.log(desc5);


// - Les méthodes des chaines de caracetere
const url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'

console.log(`Voir la doc sur ${url}`);
