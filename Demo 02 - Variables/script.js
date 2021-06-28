// ### Nommer les variables 

// Convention "camelCase"

// Peut contenir : 
// - caracteres alphanumerique
// - Le dollar
// - L'underscore « _ »

// Le nom d'un variable doit commencer par : 
// - une lettre
// - un undercore ou un dollar


// ### Le typage dynamique

// Le type est déterminé automatiquement
// Le type d'une variable n'est pas figé

// -> Best pratice : Ne pas change le type d'une variable

// Pour obtenir le type d'une variable, utiliser le mot clef "typeof"
const nb = 42;
console.log('La valeur ' + nb + ' est de type ' + typeof(nb));

const msg = 'Hello';
console.log('La valeur ' + msg + ' est de type ' + typeof(msg));



// ### La déclaration de variable 

// Trois "nature" de variable en JS :
//  - "var"   : Varaible globale (A évité ;) )
//              Déclaré en debut d'execution (Même si on ne passe dans le code)
//  - "let"   : Variable locale
//  - "const" : Constante locale

// Le "let" et le "const" n'existe quand dans leur scope !


// ### Les valeurs prédéfini "null" et "undefined"

// - "undefined"
// Variable déclarer mais non initialiser sera définir comme undefined
// C'est ce qui est renvoyé par les "Procedures" (fonction sans retour)

// - "null"
// Variable objet qui ne contient pas de valeur (nullité)
// -> Un element de type 'objet' qui ne conduit null part

// Attention, elles ne sont pas du meme type !
const t1 = typeof(undefined)  // 'undefined'
const t2 = typeof(null)       // 'object'