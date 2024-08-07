const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const botao3 = document.querySelector('#botao3');
const score = document.querySelector('select');

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

botao1.addEventListener('click', (e) => {   
    var player1Valor = parseInt(player1.textContent, 0);
    player1.textContent = player1Valor + 1;
    if (score.value == (player1Valor + 1)) {
        desativarBotoes();
    }
});
botao2.addEventListener('click', (e) => {
    var player2Valor = parseInt(player2.textContent, 0);
    player2.textContent = player2Valor + 1;
    if (score.value == (player2Valor + 1)) {
        desativarBotoes();
    }
});
botao3.addEventListener('click', () => {
    resetarJogo();
})
function desativarBotoes() {
    botao1.disabled = true;
    botao2.disabled = true;
}
function resetarJogo() {
    botao1.disabled = false;
    botao2.disabled = false;
    player1.textContent = 0;
    player2.textContent = 0;
}