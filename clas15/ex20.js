var num = [1,9,3,11,5]
num[5] = 6
num.push(7) /* coloca um valor na ultima posição de uma lista */
num.length /* mostra quantas coisas tem dentro da lista */
num.sort() /* organiza em ordem cresente */
var c = num
console.log(num[3])
console.log(`${num.length}`)
console.log(`${num.sort()}`)
console.log(num[3])

var num = [1,9,3,6,4,2]
for (var x = 0; x < num.length; x++) {
    console.log(`A posição ${x} tem o valor ${num[x]}`)
}

console.log("===================================================")

for (var x in num) {
    console.log(`A posição ${x} tem o valor ${num[x]}`)
}

var pos = num.indexOf(6) /* localiza um valor especifico dentro da lista */
console.log(`o valor 4 esta na posição ${pos}`)