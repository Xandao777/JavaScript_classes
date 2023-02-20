 var velocidade = 256
 if(velocidade > 100){
    console.log("Voce esta acima da velocidade permitida")
    var multa = (velocidade - 100) * 7
    console.log(`Voce deve pagar uma multa de R\$${multa} reais`)
 }else{
    console.log("Voce esta na velocidade permitida")
 }
console.log('Dirija com segurança')