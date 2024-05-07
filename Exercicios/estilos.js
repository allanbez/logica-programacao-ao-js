const links =[
    {rel:"stylesheeet",href:"/css/reset.css"},
    {rel:"stylesheeet",href:"/css/desafio-triangulo.css"},
    {rel:"stylesheeet",href:"/css/responsividade.css"},
];
links.forEach(link=>{
    const l =document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l);
})