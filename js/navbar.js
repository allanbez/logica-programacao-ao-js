
const ancoras = [
    {"url": "/index.html","texto":"home"},
    {"url": "/exercicios/desafio-triangulo.html","texto":"exerc.1"},
    {"url": "/exercicios/produtos.html","texto":"exerc.6"}
];

function criaAncora(url,texto){

    const aExercicio1 = document.createElement('a');
ancoras.setAttribute('href',url);
ancoras.innerHTML = texto;

return ancora;
}
function criali(ancora){
    const li =document.createElement('li');
li.appendChild(ancora);
return li
}
function criaUlnav(ancoras){
    const ul =document.createElement('ul')
    ancoras.forEach(ancora => {
        const a = criaAncora(ancoras.url,ancora.texto)
        const li = criali(a)
        ul.appendChild(li)
        
    });
    return li
}





// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlnav(ancoras));

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

