function Gerar() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tab')
    var c = 0
    if (num1 <= 0) {
        window.alert('[ERRO]')
    } else {
        var num1 = Number(num.value)
        while(c < 10) {
            c++
            tab.innerHTML += `\n${num1} x ${c} = ${num1 * c} <br>`
        }
    }tab.innerHTML += 'FIM <br>'
}