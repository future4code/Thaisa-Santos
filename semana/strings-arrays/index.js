let array
console.log('a.', array)
//irá imprimir a, undefined
array = null
console.log('b.', array)
//irá imprimir b.,null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//irá imprimir 11, pois é o tamanho do array
let i = 0 
console.log('d.', array[i])
//irá imprimir d.,3
array[i+1] = 19
console.log('e.', array)
//irá imprimir e. 6
const valor = array[i+6]
console.log('f.', valor)
//irá impimir f. 9

//questão 2 vai imprimir 23


const seuNome = "Thaisa"
const email = "vianatayviana"
const frase = "Email Do Usuario" + "foi cadastrado com sucesso" + "seja bem-vindo" + "Thaisa"
console.log(frase)  

//2. Faça um programa que contenha um array com 5 das suas comidas

console.log("Essas são minhas comidas preferidas")
const comidasPreferidas = ["lasanha", "Pizza","macarrão", "feijão", "Frango"]
console.log(comidasPreferidas)
console.log = prompt("Qual sua comida preferida ?")
//3
const primeiraTarefa = prompt("Qual tarefa de hoje")
const segundaTarefa = prompt("Qual tarefa de hoje") 
const terceiraTarefa = prompt(" Qual tarefa de hoje")
const listaDeTarefa = "primeira tarefa" + "lavar roupa" + "segunda Tarefa" + " cademia" + "terceira Tarefa" + "lavar cabelo"
console.log(Listadetarefas)
const tarefaConcluida = prompt("Qual tarefa foi concluida?")


