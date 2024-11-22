function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container'); // Garantir o uso de const para elementos fixos
    if (!container) {
        console.error('Elemento com id "container" não encontrado.');
        return;
    }

    // Cria o elemento do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Define o conteúdo interno do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p> 
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>  
            </div>
        </div>
    `;

    // Controla a visibilidade da resposta
    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique para alternar o cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}
