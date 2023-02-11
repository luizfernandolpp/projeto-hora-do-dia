function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var hora = new Date().getHours()
    var título = window.document.getElementById('título')
    var rodape = window.document.getElementById('rodapé')
    var corpo = window.document.body
    var seção = window.document.getElementById('section')
    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 4 && hora < 12) {
        img.src = 'imagens/manhã.png'
        corpo.style.background = 'linear-gradient(to bottom, var(--alabaster), var(--vanilla), var(--field-drab)'
        título.style.color = 'var(--field-drab)'
        rodape.style.color = 'var(--field-drab)'
        seção.style.background = 'var(--alabaster'


    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/entardecer.png'
        corpo.style.background = 'linear-gradient(to bottom, var(--black-olive), var(--hunyadi-yellow), var(--chocolate)'
        seção.style.background = 'var(--alabaster)'
    } else {
        img.src = 'imagens/noite.png'
        corpo.style.background = 'linear-gradient(to bottom, var(--midnight-green), var(--hookers-green), black'
        seção.style.background = 'var(--alabaster)'
    }
}
