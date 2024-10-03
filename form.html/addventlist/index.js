
var area = document.getElementById("area"),
    botao = document.getElementById("meuBotao")

//verificação para todos navegadores.
if (area.attachEvent) {
    area.attachEvent("onmousemove", "moveMouse");
    botao.detachEvent("click", remoEvento);
}
else if (area.addEventListener) {
    area.addEventListener("mousemove", moveMouse, true);
    botao.addEventListener("click", remoEvento);
}

function moveMouse(evento) {
    var x = evento.x,
        y = evento.y;
    
    document.getElementById("resultado").innerHTML = "x: " + x + " y: " + y;
}
function remoEvento() {
    area.removeEventListener("mousemove", moveMouse, true);
}
