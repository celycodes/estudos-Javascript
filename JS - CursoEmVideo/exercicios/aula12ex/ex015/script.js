function verificar() {
    var date = new Date()
    var anoAtual = date.getFullYear() // ano atual
    var anoNasc = document.getElementById('txtano') // ano de nascimento
    var res = document.getElementById('res')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNasc.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sexo[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto em js
        res.innerHTML = `Detectamos <strong>${gen}</strong> com ${idade} anos.`
        res.appendChild(img)
    }
}