function contar() {
    let ini = document.getElementById('txti') //inicio
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') // resultado

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERROR] Faltam dados!')  
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) // inicio
        let f = Number(fim.value) // fim
        let p = Number(passo.value) // passo
        if (p <= 0) {
            alert('[ERROR] Passo inválido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F47D} `
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F47D} `
            }
        }
        res.innerHTML += `\u{1F49C}`
    }
}