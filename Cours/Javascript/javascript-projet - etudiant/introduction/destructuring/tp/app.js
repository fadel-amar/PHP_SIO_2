console.log('-----------------------------');
console.log('---- Travaux pratiques ----  ');
console.log('-----------------------------');

const personnes = [
    {id: 1, nom: 'Dupond', prenom: 'Jean', age: 55},
    {id: 2, nom: 'Martin', prenom: 'Martine', age: 40},
    {id: 3, nom: 'Durand', prenom: 'Pierre', age: 50},
    {id: 4, nom: 'Doe', prenom: 'John', age: 33}
];

console.log('---- Exercice 1 : afficher les personnes ----  ');
personnes.forEach(personnes, personne => console.log(personne))
console.log('---- Exercice 2 : afficher l\'identité des personnes ----  ');
personnes.forEach(personnes, ({age, nom, prenom}) => console.log(age, nom, prenom))
console.log('---- Exercice 3 : afficher les personnes de plus de 50 ans ----  ');


console.log('---- Exercice 4 : afficher l\'identité des personnes de plus de 50 ans ----  ');
