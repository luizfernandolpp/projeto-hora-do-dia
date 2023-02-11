function carregar() {       // Função com evento "onload" -> irá executar sempre que a página for carregada;
    var msg = window.document.getElementById('msg')   // variável de ligação com a mensagem que informa as horas;
    var img = window.document.getElementById('img')   // variável de ligação com a imagem a ser escolhida de acordo com a hora; 
    var hora = new Date().getHours()                // variável que recebe a hora de acordo com o fuso do sistema do usuário;
    var título = window.document.getElementById('título')           // variável para modificações no título da página;
    var rodape = window.document.getElementById('rodapé')           // variável para modificações no rodapé da página;
    var seção = window.document.getElementById('section')           // variável para modificações na seção da página.
    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 4 && hora < 12) {  // condições para o turno da manhã;
        img.src = 'imagens/manhã.png'
        document.body.style.background = 'linear-gradient(to bottom, var(--alabaster), var(--vanilla), var(--field-drab)'  // modifica a cor de fundo da página;
        título.style.color = 'var(--field-drab)'   // modifica a cor da fonte do título da página;
        rodape.style.color = 'var(--field-drab)'    // modifica a cor da fonte do rodapé da página;
        seção.style.background = 'var(--alabaster)' // modifica a cor de fundo do conteúdo principal;
    } 
    else if (hora >= 12 && hora < 18){    // condições para o turno da tarde;
        img.src = 'imagens/entardecer.png'
        document.body.style.background = 'linear-gradient(to bottom, var(--black-olive), var(--hunyadi-yellow), var(--chocolate)'
        seção.style.background = 'var(--alabaster)'
    } 
    else {   // condições para o turno da noite;
        img.src = 'imagens/noite.png'
        document.body.style.background = 'linear-gradient(to bottom, var(--midnight-green), var(--hookers-green), black'
        seção.style.background = 'var(--alabaster)'
    }
}
