const
temperatura = parseFloat(window.prompt ('digite a temperatura')),
escalaatual=window.prompt ('digite a unidade de temperatura').toLowerCase(),
convercao=window.prompt('converção para sua temperatura').toLowerCase();

const
celsiusfahrenheint= (temperatura*9/5) +32,
celsiuskelvin= temperatura + 273.15,
fahrenheintcelsius=(temperatura - 32)*5/9,
fahrenheintkelvin=(temperatura+459.67)*5/9,
kelvincelsius= temperatura + 273.15,
kelvinfahreheint = temperatura * 9/5-459.67;
    
if (!isNaN(temperatura)){
    escalaatual=window.prompt ('digite a unidade de temperatura').toLowerCase(),
convercao=window.prompt('converção para sua temperatura').toLowerCase();

  


if(escalaatual=="c" && convercao == "f"){
    window.alert (`temperatura =${celsiusfahrenheint}`);
} 
else if(escalaatual=="c"&& convercao == "k"){
    window.alert (`temperatura=${celsiuskelvin}`);
}
else if (escalaatual=="f" && convercao == "c"){
    window.alert (`temperatura=${fahrenheintcelsius}`);
}
else if (escalaatual== "f" && convercao =="k"){
    window.alert (`temperatura=${fahrenheintkelvin}`);
}
else if (escalaatual == "k" && resultado =="c"){
    window.alert(`temperatura=${kelvincelsius}`);
}
else if (escalaatual == "k" && resultado == "f"){
    window.alert (`temperatura${kelvinfahreheint}`);
}
else {
    window.alert(`resultado inválido`);
}
}else{
    window.alert(`digite um numero`)
}
