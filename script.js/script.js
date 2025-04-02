document
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById ('opcoes-acessibilidade');
botaoAcessibilidade.addEventListener('click', function(){
    botaoAcessibilidade.classList.toggle('ratacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
})
