var amigo = {
    nome:'Alexandre',
    idade: 17,sexo:'M',
    peso: 80,
    engordar(p){console.log('Engordou')
    this.idade += p}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)