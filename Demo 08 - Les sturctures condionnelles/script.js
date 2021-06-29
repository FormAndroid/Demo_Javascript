// ### La stucture « if - else if - else »
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
const resultatIf = document.getElementById('resultat_if');
const nb = parseInt(prompt('Encoder une valeur numerique'));

if(isNaN(nb)) {
    resultatIf.innerHTML = `L'utilisateur est un boulet :o`;
}
else if (nb === 0) {
    resultatIf.innerHTML = `La valeur vaut zero`;
}
else if(nb % 2 === 0) {
    resultatIf.innerHTML = `La valeur ${nb} est pair`;
}
else {
    resultatIf.innerHTML = `La valeur ${nb} est impair`;
}


// ### La structure « switch »
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
const resultatSwitch = document.getElementById('resultat_switch');
const day = parseInt(prompt('Encoder une valeur numerique de 1 à 7'));

switch (day) {
    case 1: 
        resultatSwitch.innerHTML = 'Lundi'; 
        break;
    case 2: 
        resultatSwitch.innerHTML = 'Mardi'; 
        break;
    case 3: 
        resultatSwitch.innerHTML = 'Mercredi'; 
        break;
    case 4: 
        resultatSwitch.innerHTML = 'Jeudi'; 
        break;
    case 5: 
        resultatSwitch.innerHTML = 'Vendredi'; 
        break;
    case 6: 
        resultatSwitch.innerHTML = 'Samedi'; 
        break;
    case 7: 
        resultatSwitch.innerHTML = 'Dimanche'; 
        break;
    default: 
        // Les accolades sont optionnelles
        if(isNaN(day)) 
            resultatSwitch.innerHTML = 'BOUMMMMMMMMMMMM!'; 
        else 
            resultatSwitch.innerHTML = 'Valeur en dehors du scope !'; 
        break;
}


// ### L'operateur ternaire
const input1 = prompt('Veuillez encoder un message').trim();
// Rappel "trim" : Retire les espace blanc en debut et fin de chaine.
//  Exemple -> "   Zaza Vanderquack  " devient "Zaza Vanderquack"

const message1 = (input1.length > 0) ? `Votre message fait ${input1.length} caracteres` : `Votre message est vide !`;
console.log(message1);


// ### L'operateur Nullish Coalescing « ?? »
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// Si la valeur tester n'est pas défini (null / undefined), cela permet d'affecter une valeur

const input2 = undefined;

const message2 = input2 ?? 'Message vide';
console.log(message2);

const message3 = (input2 !== null && input2 !== undefined) ? input2 : 'Message vide';
console.log(message3);

