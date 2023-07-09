let operacaoAnterior = document.getElementById('op-anterior')
let operacaoAtual = document.getElementById('op-atual')
let botoes = document.querySelector('div#btn-container')


function adicionar(num) {
    let atual = operacaoAtual.innerHTML += num
}

function limpar() {
    operacaoAtual.innerHTML = ``
    operacaoAnterior.innerHTML = ` `
}

function apagar() {
    let apagar = operacaoAtual.innerHTML
    operacaoAtual.innerHTML = apagar.substring(0, apagar.length -1)
}

function calcular() {
    let resultado = operacaoAtual.innerHTML
    if (resultado) {
        operacaoAtual.innerHTML = eval(resultado)
        operacaoAnterior.innerHTML = resultado
    } else {
        operacaoAtual.innerHTML += `0`
    }
}