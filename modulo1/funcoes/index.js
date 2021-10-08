//1.Exercicio
// A= 10, 50
// B= translation started

//2. Exercicio
// Letra A. Pedir para o usuario insira um texto, transformar todo o texto em maiuscula
// e dizer se vai ser true ou false.Resposta do console false

//letra B.

// 1. Escrita de codigo

const nome = "Thaisa"
const idade = "30" 
const cidade = "Itabuna"
const frase = prompt("EuSouThaisaTenho30AnosMoroItabunaSouEstudante")

//Letra B

function informacoes(nome, idade, cidade, profissao) {
    const perfil = `Eu ${nome}, tenho ${idade}, sou de ${cidade}, minha ${profissao}`
    return perfil
}

const perfil = informacoes("Thaisa", 30, "Itabuna", "Estudante")
console.log(perfil)

//2.a Exercicio

function calcular(tres , cinco) {
    const soma = '3 + 5'
    return soma 
}

const soma = 3 + 5
console.log(soma)

function informar( Number) {
   const saber = '4>=5'
    return Number
}
const saber = 4>=5
console.log(saber)

//2.d

function mensagem(toComFome) {

console.log("café:",toComFome.length)
console.log(toComFome.toUpperCase())
}

//3.Exercicio

const usuario = prompt("insiraDoisNumeros")
// 30 e 3
//function parametro(valo30,valo3) {
    //let Somar = '30 + 3'
    //return Somar
//console.log(Somar)

function resultado(valor30,valor3) {
    const diferenca = '30 - 3'
    return diferenca
}
const diferença = 30 - 3
console.log(diferença)

function resultado(valor30,valor3) {
    const Multiplicaçao = '30 * 3'
    return Multiplicaçao
}
const Multiplicaçao = 30 * 3
console.log(Multiplicaçao)

function resultado(valor30,valor3) {
    const divisao = '30 / 3 '
    return divisao
}
const divisao = 30 / 3
console.log(divisao)