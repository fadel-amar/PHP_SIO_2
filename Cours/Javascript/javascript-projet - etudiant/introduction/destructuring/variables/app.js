console.log('---- Variables ----')
let a = ["HEHE", "BOI"]
console.log('---- Constantes ----')
const ad = ["HEHE", "BOI"]
ad.push("marche po")

console.log('-------------------------------')
console.log('---- Chaines de caractères ----')
console.log('-------------------------------')

let promotion = `Bts sio 2`
console.log('---- Longueur d\'une chaine ----')
console.log(`${promotion.length}`)

console.log('---- Concaténation ----')
console.log(`${promotion} ${"test"}`)

console.log('---- Accès à un caractère ----')
console.log(promotion[5])

console.log('---- Quelques méthodes ----')
let email = "toto@gmail.com"
console.log(email.slice(email.indexOf("@") + 1))

console.log('---- Modification d\'une chaine ----')
let test = "TEST"
console.log(test)
test = "Test"
console.log(test)

console.log('---- Classe String ----')
let stringg = String("STRING")
console.log(stringg)

console.log('------------------')
console.log('---- Tableaux ----')
console.log('------------------')
let tab = [1, 2, 3, 4, 5]
console.log(tab)

console.log('---- Parcours avec une boucle for ----')
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i])
}

console.log('---- Parcours avec une boucle for ES6 ----')
for (const element of tab) {
    console.log(element)
}

console.log('---- Ajouter un élément dans le tableau ----')
tab.push(5555)
console.log(tab)

console.log('---- Type d\'un tableau ----')
console.log(typeof tab)



