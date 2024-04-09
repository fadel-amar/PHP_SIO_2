console.log('------------------------------');
console.log('---- Fonctions classiques ----');
console.log('------------------------------');

function addition (a,b) {
    return a + b
}
console.log(`Résultat : ${addition(1,3)} `)

console.log('------------------------------');
console.log('---- Fonctions anonymes ----  ');
console.log('------------------------------');
const anonyme = function (a,b) {
    return a-b
}
console.log(` Résultat : ${anonyme(15,5)} `)

console.log('------------------------------');
console.log('---- Fonctions fléchées ----  ');
console.log('------------------------------');

const soustactionFlechee =  (a,b)=> {
    return a -b
}
const soustactionFlechee2 =  (a,b) => a -b

console.log(` Résultat : ${soustactionFlechee(25,5)} `)


console.log('---------------------------------');
console.log('---- Exemples d\'application ----');
console.log('---------------------------------');
let nombres = [2,8,15,17,26,9,42,4];

// Afficher les éléments du tableau $nombres qui sont pairs avec une boucle for
console.log('---- Afficher les éléments du tableau $nombres qui sont pairs ----');
function NombrePaires(tableau) {
    
}


// Afficher les éléments du tableau $nombres qui sont pairs avec une boucle forEach
console.log('---- Afficher les éléments du tableau $nombres qui sont pairs ----');

// Récupérer tous les éléments du tableau $nombres qui sont supérieurs à 10
console.log('---- Récupérer tous les éléments du tableau $nombres qui sont supérieurs à 10 ----');
// Avec une boucle for

console.log('---- Récupérer tous les éléments du tableau $nombres qui sont supérieurs à 10 ----');
// Avec un filtre

// Récupérer tous les éléments du tableau $nombres à la puissance 2
console.log('---- Récupérer tous les éléments du tableau $nombres à la puissance 2 ----');

console.log('---- Récupérer tous les éléments du tableau $nombres à la puissance 2 ----');

// Récupérer tous les éléments pairs du tableau $nombres à la puissance 2
console.log('---- Récupérer tous les éléments pairs du tableau $nombres à la puissance 2 ----');

console.log('---- Récupérer tous les éléments pairs du tableau $nombres à la puissance 2 ----');
