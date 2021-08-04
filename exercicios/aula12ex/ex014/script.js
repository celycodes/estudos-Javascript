function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`

    if (hora >= 0 && hora < 12) {
        // manhã
        img.src = 'manha.png'
        document.body.style.background = '#FFBC93'
    } else if (hora > 12 && hora < 18) {
        // tarde
        img.src = 'tarde.png'
        document.body.style.background = '#E97D3E'
    } else {
        // noite
        img.src = 'noite.png'
        document.body.style.background = '#2A88A2'
    }
}
