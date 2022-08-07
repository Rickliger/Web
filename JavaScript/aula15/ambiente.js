let num  = [2, 3, 4, 5, 6]
num.push(7)
num.sort()
console.log(`Nosso vertor é o ${num} e tem ${num.length} elementos`)
console.log()
console.log('for let pos = 0; pos < num.length; pos++')
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
console.log()
console.log('for (let pos in num)')
for (let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
console.log()
var pesq = 8
pos = num.indexOf(pesq)
if (pos == -1){
    console.log(`O valor não está na lista!`)
}else{
    console.log(`O valor ${pesq} está na posição ${pos}`)
}

