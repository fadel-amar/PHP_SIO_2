// blaise = document.getElementById("id1");
const id1 = document.querySelector('#id1')
id1.style.background = 'coral';

const id2 = document.querySelector('#id2');
id2.style.border = 'solid coral 2px';

const listeDiv = document.querySelectorAll('div');
console.log(listeDiv)

const liste = document.querySelectorAll('ul>li')
console.log(liste)

// Parcourir la liste des div
for (const div of listeDiv) {
    console.log(div)
}

listeDiv.forEach(elementDiv=> console.log(elementDiv))


const ul = document.querySelector('ul');
console.log(ul.textContent)
console.log(ul.innerHTML)

const h1 = document.querySelector('h1')
h1.textContent = 'Reveille toi !!:!!!!!!'


const p = document.querySelector('#id1>p')
console.dir(p)
console.log(p.style)
p.style.color = 'white'
p.style.border = "2px solid black"
p.style.fontSize = '35px';

ul.classList.add("popo")

if(ul.classList.contains("popo")) {
    console.log("J'ai réussi :!!::")
}

ul.classList.remove('1')

// function reaction () {
//     id1.style.background = 'blue';
// }

const btn1 = document.querySelector('#btn1')
btn1.addEventListener("click",(e) =>  {
    console.log(e.target)
})

const cordonne = document.querySelector('cordonne')
document.addEventListener('mousemove',(coor) => {
    cordonne.textContent = `X:{e.clientX}`
})