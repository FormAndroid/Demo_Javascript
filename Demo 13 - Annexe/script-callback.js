//  - Les callbacks
// L'utilisation de parametre de type 'function' pour qu'une fonction
// puisse executer du code recu via une variable.

// Les callbacks sont souvent utiliser avec du code asynchrone.
//  -> Car celui-ci n'attent pas le resultat de la fonction.

/**********************************************************************/

// Exemple 1 -> Demande d'un nombre entier.
const demoCallback = function(msg, cb) {
    const response = parseInt(prompt(msg));
    
    if(!isNaN(response)) {
        
        // Execution du callback !
        if(cb && typeof(cb) === 'function') {
            cb(response);
        }
    }
}

/*
demoCallback('Le nombre est pair ?', function(nb) {
    const test = (parseInt(nb/2) === nb/2);
    alert(`La valeur ${nb} est ${test ? 'pair' : 'impair'}`);
})
*/

/**********************************************************************/

// Exemple 2 -> Demande d'un nombre entier avec une gestion d'erreur.
const demoCallbackWithError = function(msg, cbSuccess, cbError) {
    // Teste de garde pour s'assurer qu'on a les 2 callbacks
    if(!cbSuccess && !cbError && typeof(cbSuccess) !== 'function' && typeof(cbError) !== 'function') {
        throw Error('Les callbacks sont requis !')
    }

    const response = parseInt(prompt(msg));

    if(!isNaN(response)) {
        cbSuccess(response);
    }
    else {
        cbError();
    }
}

/*
demoCallbackWithError('Le nombre est multiple de 3', function(nb) {
    const verb = (nb % 3 === 0) ? 'est' : 'n\'est pas';
    alert(`La valeur ${nb} ${verb} multiple de 3!`);
}, function() {
    alert(`Le valeur encodée n'est pas valide !`);
});
*/

/**********************************************************************/

// Callback Hell -> L'enfer des callback
//  -> Code avec des callbacks qui ont comme parametre des callbacks

const addition = function(nb1, nb2, cbResult) {
    const result = nb1 + nb2;

    if(cbResult && typeof(cbResult) === 'function') {
        cbResult(result);
    }
}

const soustraction = function(nb1, nb2, cbResult) {
    const result = nb1 - nb2;

    if(cbResult && typeof(cbResult) === 'function') {
        cbResult(result);
    }
}

console.log('- Operation 12 + 30');
addition(12, 30, function(r) {
    console.log(`Le resultat de l'operation est ${r}`);
});
console.log('');

console.log(' - Operation 10 - 5 + 9 -6 + 10 + 11 - 6');
soustraction(10, 5, function(r1) {
    addition(r1, 9, function(r2) {
        soustraction(r2, 6, function(r3){
            addition(r3, 10, function(r4) {
                addition(r4, 11, function(r5) {
                    soustraction(r5, 6, function(rFinal) {
                        console.log(`Le resultat de l'operation est ${rFinal}`);
                    })
                })
            })
        })
    })
})
// Un lien d'information http://callbackhell.com/