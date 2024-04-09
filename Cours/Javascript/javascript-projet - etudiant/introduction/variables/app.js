console.log('---- Variables ----');
let a = 10
console.log(a)
console.log(typeof a)

console.log('---- Constantes ----');
const b = 15
console.log(b);

console.log('-------------------------------');
console.log('---- Chaines de caractères ----');
console.log('-------------------------------');
let promotion = 'BTS SIO'
console.log(promotion)
promotion = `BTS SIO`
console.log(promotion)

console.log('---- Longueur d\'une chaine ----');
let coco = 'cocojojo'
console.log(coco.length)

console.log('---- Concaténation ----');
console.log('je suis en ' + promotion)
console.log(`je suis en ${promotion}`)

console.log('---- Accès à un caractère ----');
console.log(promotion[2])
console.log(promotion.charAt(2))

console.log('---- Quelques méthodes ----');
let email = 'toto@test.fr'
console.log(email.slice(email.search('@') +1 ) )

console.log('---- Modification d\'une chaine ----');
let texte = 'chaine1'
texte[texte.length -1] = '2'
/*valeur chaine non immutable*/
console.log(texte)

console.log('---- Classe String ----');
let prenom = new String('Samir')
console.log(prenom)
console.log(prenom.valueOf())


console.log('------------------');
console.log('---- Tableaux ----');
console.log('------------------');
const nombres = [1,20,3,5]
console.log(nombres)

console.log('---- Parcours avec une boucle for ----');
for(let i = 0  ; i<nombres.length ; i++) {
    console.log(nombres[i])
}

console.log('---- Parcours avec une boucle for ES6 ----');
for(let nombre of nombres) {
    console.log(nombre)
}
console.log('---- Ajouter un élément dans le tableau ----');
nombres.push(50)
console.log(nombres)


console.log('---- Type d\'un tableau ----');
console.log(typeof(nombres))
console.log(Array.isArray(nombres))

