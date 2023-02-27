var idade = 70
console.log(idade)
if (idade < 16) {
    console.log("Voce não tem idade para votar")
} else if (idade < 18 || idade >= 65) {
    console.log("Vocé não e obrogado a votar, o seu voto e opçonal")
}else {
    console.log("O seu voto é obrigatorio")
}