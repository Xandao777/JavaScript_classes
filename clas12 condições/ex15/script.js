function verificar() {
    var msg = window.document.getElementById('txt')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var ano2 = document.getElementById('nascimento')
    if (ano2.value.length == 0 || ano2.value > ano) {
        window.alert(`[ERRO] Digite os dados novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(ano2.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/menino.jpg') /* usado para atribuir uma imagem na parte HTML */
            } else if ( idade < 21) {
                img.setAttribute('src', 'imagens/jovem.jpg')
            } else if ( idade < 50) {
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if ( idade < 21) {
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if ( idade < 50) {
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        msg.style.textAlign = 'center' /* usa uma função do CSS dentro do JS, essa função permite mudar o local de um texto da parte em html */
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
        msg.appendChild(img) /* usado para mostra a imagem adicionada com o comando setattribute */
    }
}