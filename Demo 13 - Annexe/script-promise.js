// Les promesses

// - Un objet qui represente une valeur qui est disponible : 
//      • Directement
//      • Dans le futur
//      • Jamais

// - Cet objet est principalement utiliser pour le traitement asynchrone.
//   Ce qui permet d'evité les callbacks

// - Un promesses peut avoir 4 états : 
//      • pending   → Etat initial, en attente
//      • fulfilled → Complété avec succes
//      • rejected  → Complété avec erreur
//      • settled   → La promesse n'est plus en attente (Tenue / Rompue)


const divisionCallback = function (nb1, nb2, cbSuccess, cbError) {
    // Utilisation de 'setTimeout' pour réaliser de l'asynchrone
    setTimeout(() => {
        if (nb2 === 0) {
            // Lance le callback d'erreur
            cbError('Division par Zero !');
        }
        else {
            setTimeout(() => {
                // Operation
                const result = nb1 / nb2;

                // Lance le callback de succes
                cbSuccess(result);
            }, 3000);
        }
    }, 1000);
}

const divisionPromise = function (nb1, nb2) {
    // Création de le promesse
    return new Promise(function (resolve, reject) {
        // Zone de code à éxecuter
        setTimeout(() => {
            if (nb2 === 0) {
                // Utilisation du 'reject' pour indiqué que l'operation à échoué
                reject('Division par Zero !');
            }
            else {
                setTimeout(() => {
                    // Operation
                    const result = nb1 / nb2;

                    // Utilisation de 'resolve' pour infiqué que l'opération à réussi :)
                    resolve(result);
                }, 3000);
            }
        }, 1000);
    });
}

console.log('Utilisation des promesses');

// On souhaite obtenir le resultat de 10 diviser par 2
divisionPromise(10, 2)
    .then(function (result) {
        console.log(`Le resultat est ${result}`);
    }, function (errorMsg) {
        console.log(`Message d'erreur ${errorMsg}`);
    });

// On souhaite obtenir le resultat de 10 diviser par 3
divisionPromise(10, 3)
    .then(function (result) {
        console.log(`Le resultat est ${result}`);
    })
    .catch(function (errorMsg) {
        console.log(`Message d'erreur ${errorMsg}`);
    });


// On souhaite obtenir le resultat de 42 diviser par 2, puis ensuite diviser par 3
divisionPromise(42, 2)
    .then(r => divisionPromise(r, 3))
    .then(function (result) {
        console.log(`Le resultat est ${result}`);
    })
    .catch(function (errorMsg) {
        console.log(`Message d'erreur ${errorMsg}`);
    });

// On souhaite obtenir le resultat de ((((100 / 2) / 3) / 5) / 10
divisionPromise(100, 2)
    .then(r => divisionPromise(r, 3))
    .then(r => divisionPromise(r, 5))
    .then(r => divisionPromise(r, 10))
    .then(function (result) {
        console.log(`Le resultat (promesse chainé) est ${result}`);
    })
    .catch(function (errorMsg) {
        console.log(`Message d'erreur ${errorMsg}`);
    })
    .finally(function () {
        console.log('Le traitement de la promesse chainé est terminé !');
    });

/*
// Boucle pour simuler des actions (pour la demo)    
const fctDemo = function () {
    setTimeout(() => {
        console.log('Coucou');
        fctDemo();
    }, 100);
}
fctDemo();
*/
/***************************************************************************/
// Les mots clefs "async" et "await"

//  - async : Permet de créer une fonction dont le contenu est asynchrone
//  - await : Impose d'attendre le résultat de la promesse
//            Ne peux etre utiliser que dans une fonction async

const demoAsync = async function () {
    try {
        const r1 = await divisionPromise(100, 2);   // On attendre le resolve
        const r2 = await divisionPromise(r1, 3);
        const r3 = await divisionPromise(r2, 5);
        const r4 = await divisionPromise(r3, 10);

        console.log(`Le resultat (promesse await) est ${r4}`);
    }
    catch (errorMsg) {
        // On traite le reject des promesses
        console.log(`Message d'erreur ${errorMsg}`);
    }
    finally {
        console.log('Le traitement de la promesse await est terminé !');
    }
};
demoAsync();





