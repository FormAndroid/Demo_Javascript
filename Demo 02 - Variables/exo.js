var maVariable = 42;                   //  OK

var hello world = "Demo";              // Espace dans le nom

const demo = "42";                     // OK

let 3fois10 = 30;                      // Commence par un nombre

let !val = "9 heures";                 // Caracetere non autorisé

const total = 20 + maVariable;         // OK

const max elem = 22;                   // Espace dans le nom 

const €_prix = "10 €";                 // Caracetere non autorisé

const demo = "Test";                   // Variable deja existante

var maVariable = 99;                   // OK -> Mais ecrase la précedente !

let resultat1 = 6 + 6 + "6" + 6;        // OK -> Resultat de "1266" (String)

let resultat2 = 6 + 6 + "6" - 6;        // OK -> Resultat de 120 (Number)

const message = Bonjour bruxelles ! ;   // Il manque les "quotes"