const botao = document.getElementById('meu-botao');

// Criamos uma lista (Array) de cores. Colocamos entre colchetes [ ].
const cores = ['#FF5733', '#33FF57','#000000', '#FF0000', '#F333FF', '#33FFF5'];

// Criamos um contador para saber qual cor da lista usar
let contador = 0;

function mudarCordeFundo() {
    // Pegamos a cor da lista na posição do contador
    document.body.style.backgroundColor = cores[contador];

    // Mudando o texto do botão para o código da cor atual
    botao.textContent = "cor:" + cores[contador];

    // SE a cor atual for o preto absoluto...
if (cores[contador] === '#000000') {
    // Mude a cor da letra do parágrafo para branco
    document.querySelector('p').style.color = 'white';
} else {
    // CASO CONTRÁRIO, mantenha o vermelho escuro (ou a cor original)
    document.querySelector('p').style.color = 'darkred';
}
    // Somamos +1 ao contador para a próxima vez ser outra cor
    contador = contador + 1;

    // Se o contador chegar ao fim da lista, voltamos para o zero
    if (contador === cores.length) {
        contador = 0;
    }
}botao.addEventListener('click', mudarCordeFundo);