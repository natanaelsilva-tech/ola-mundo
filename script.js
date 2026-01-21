// 1. Criamos uma "variável" para guardar o nosso botão. 
// O documento (document) busca pelo ID que você criou no HTML.
const botao = document.getElementById('meu-botao');

// 2. Criamos uma função que contém a ação de mudar a cor.
function mudarCorDeFundo() {
    // Acessamos o corpo (body) da página, o estilo (style) e a cor de fundo (backgroundColor).
    document .body.style.backgroundColor = "coral";
}
// 3. O "Ouvinte": Dizemos ao botão para ficar esperando um 'click'. 
// Quando o clique acontecer, ele chama a função 'mudarCorDeFundo
botao.addEventListener('click', mudarCorDeFundo);
