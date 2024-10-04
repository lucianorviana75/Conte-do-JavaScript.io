

var mensagem = function (mensagem) {
    document.write(mensagem)
}

var minhaFuncao = function (num1, num2) {
    if (num1 > num2) {
        return (mensagem(num1 + " é maio que " + num2));
    } else {
        return (mensagem(num2 + " é maio que " + num1));
    }
}
minhaFuncao(9, 6);