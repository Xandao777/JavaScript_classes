var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor invalido ou ja adicionado na lista')
    }
    num.value = '' /* usar para logo depois de executar a função, o que esteja escrito desapareça */
    num.focus() /* usado para fazer o cursor voltar para o local desejado */
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadatrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p> `
        res.inertHTML += `<p>A soma dos valores foi ${soma}. </p> `
        res.inertHTML += `<p>A media dos valores foi ${media}. </p> `
    }
}