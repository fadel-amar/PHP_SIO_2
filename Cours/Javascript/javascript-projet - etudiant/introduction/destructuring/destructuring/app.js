console.log('----------------------------');
console.log('---- Le destructuring ----  ');
console.log('----------------------------');

console.log('---- Destructurer un tableau ----  ');
const tab = [100, 200, 300, 400, 500];

console.log('---- Destructurer un objet ----  ');
const personne = {
    prenom: 'jean',
    nom: 'dupond',
    age: 40
}
// Tableau
let [a, , b] = tab
console.log(a, b)
// Objet
let {nom: n, age: ag} = personne
console.log(n, ag)

ptitfx = ({prenom, nom}) => {
    return `${prenom} ${nom}`
}
console.log(ptitfx(personne))