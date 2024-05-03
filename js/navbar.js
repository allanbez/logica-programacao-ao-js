
// <a> do Home
const home =criaAncora('/index.html','home')

// <li> do Home
const liHome = document.createElement('li');
liHome.appendChild(aHome);


// <a> do exercício 1
const exercicio1=criaAncora('/exercicicos/desafio-triangulo.html','exrc.1');
const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '/exercicios/exercicio1.html');
aExercicio1.innerHTML = 'Exerc. 1';

// <li> do exercício 1
const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

// <a> do exercício 6
const aExercicio6 = document.createElement('a');
aExercicio6.setAttribute('href', '/exercicios/exercicio6.html');
aExercicio6.innerHTML = 'Exerc. 6';

// <li> do exercício 6
const liExercicio6 = document.createElement('li');
liExercicio6.appendChild(aExercicio6);

// <ul> do menu
const ulNav = document.createElement('ul');
ulNav.append(liHome, liExercicio1, liExercicio6);

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

// Aqui segue de acordo com a solução do professor...

// <span>Desafios & Exercícios</span>
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios & Exercícios';

// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

// <div class="logo-menu">
const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.append(divLogo, nav);

const header = document.createElement('header');
header.appendChild(divLogoMenu);

// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);


// Estilos do Navbar
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.head.appendChild(linkNavbar);


function criaAncora(url,texto){

    const aExercicio1 = document.createElement('a');
ancora.setAttribute('href'/url);
ancora.innerHTML = texto;

return ancora;
}
function criali(ancora){
    const li =documente.createElement('li');
li.appendChild(ancora);
return li
}