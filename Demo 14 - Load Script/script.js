console.log('Start !');

window.addEventListener('load', function () {
    console.log('Chargé !');

    const titre = document.getElementById('demo');
    titre.innerHTML = 'Bonjour BXL formation!';
});

window.addEventListener('beforeunload', function(e) {
    // Permet d'afficher un popups pour "empecher" la fermeture de la page
    e.preventDefault();
    // Le retour de valeur est necessaire pour "Chrome" ;)
    e.returnValue = '';
})

console.log('End');