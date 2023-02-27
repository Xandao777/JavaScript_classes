function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() /* importa a biblioteca Date/ o New pode ser usado para importar bibliotecas do JavaScrip */
    var hora = data.getHours() /* usa uma função especifica da biblioteca data */
    msg.innerHTML = `Agora são ${hora} horas.`
    console.log(`Agora são exatamente ${hora} horas.`)
    if (hora > 6 && hora < 12) {
        img.src = 'fotos/nascer do sol.jpg'
        document.body.style.background = "#fc772a"
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = "#4757ac"
    }else if (hora >= 18 && hora < 23) {
        img.src = 'fotos/noite.jpg'
        document.body.style.background = "#517c8a"
    }else if (hora >= 23 || hora < 6) {
        img.src = 'fotos/madrugada.jpg'
        document.body.style.background = "#a683bd"
    }
}