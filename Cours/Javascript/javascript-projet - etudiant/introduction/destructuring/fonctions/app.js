console.log('------------------------------');
console.log('---- Fonctions classiques ----');
console.log('------------------------------');

function fx(a, b) {
    return a + b
}

console.log('------------------------------');
console.log('---- Fonctions anonymes ----  ');
console.log('------------------------------');
let fxa = function (a, b) {
    return a + b
}

console.log('------------------------------');
console.log('---- Fonctions fléchées ----  ');
console.log('------------------------------');
let fxf = (a, b) => a + b

console.log('---------------------------------');
console.log('---- Exemples d\'application ----');
console.log('---------------------------------');
let nombres = [2, 8, 15, 17, 26, 9, 42, 4];

console.log('---- Afficher les éléments du tableau $nombres qui sont pairs ----');
for (let nombre of nombres) {
    if (nombre % 2 === 0) {
        console.log(nombre)
    }
}

console.log('---- Afficher les éléments du tableau $nombres qui sont pairs ----');
nombres.forEach(nombre => {
    if (nombre % 2 === 0) {
        console.log(nombre)
    }
})

console.log('---- Récupérer tous les éléments du tableau $nombres qui sont supérieurs à 10 ----');
let newtab = []
for (let nombre of nombres) {
    if (nombre > 10) {
        newtab.push(nombre)
    }
}
console.log(newtab)
console.log('---- Récupérer tous les éléments du tableau $nombres qui sont supérieurs à 10 ----');
console.log(nombres.filter(nombre => nombre > 10))

console.log('---- Récupérer tous les éléments du tableau $nombres à la puissance 2 ----');
newtab = []
for (let nombre of nombres) {
    newtab.push(nombre ** 2)
}
console.log(newtab)
console.log('---- Récupérer tous les éléments du tableau $nombres à la puissance 2 ----');
console.log(nombres.map(nombre => nombre ** 2))

console.log('---- Récupérer tous les éléments pairs du tableau $nombres à la puissance 2 ----');
console.log(nombres.filter(nombre=>nombre % 2 === 0).map(nombre => nombre**2))
