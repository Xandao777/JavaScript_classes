function contar() {
    var inicio = window.document.getElementById('in')
    var fim = window.document.getElementById('fi')
    var passo = window.document.getElementById('pa')
    var msg = window.document.getElementById('msg')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados')
    } else {
        msg.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0 ) {
            p = 1
        }
        if (1 < f) {
            for(var c = i; c <= f; c += p) {
                sei.innerHTML += `${c} > `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                sei.innerHTML += `${c} > `
            }
        }
        sei.innerHTML += 'FIM!'
    }
}
