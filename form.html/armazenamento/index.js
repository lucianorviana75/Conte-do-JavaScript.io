//pega o elemento form
var formE1 = document.getElementById("meuForm");

//chama a função capitura eventos
captura_eventos(formE1, 'submit', formValid);

//função para capiturar eventos
function captura_eventos(objeto, evento, funcao) {
    //teste addEventListener
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    }
    //teste attachEvent
    else if (objeto.attachEvent) {
        var evento = 'on' + evento;
        objeto.attachEvent(evento, funcao);
    }
}
/*
//função para validar eventos
function formValid(event) {
    if (document.forms[0].textname.value.length == 0) {
        alert("O campo SEU NOME!, é obrigatorio.");

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            window.Event.returnValue = false;
        }
        return false;
    } else {
        alert("Olá" + document.forms[0].textname.value);
        return true;
    }
    
}
    */