// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2

}
console.log(soma(1,2))


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("insira a altura")
  const largura = prompt("insira a largura")
  return  altura * largura
}
console.log(calculaAreaRetangulo(3,5))

// EXERCÍCIO 02
function imprimeIdade(ano2020, nascimento1990) {
  const ano = 2020
  const nascimento = 1990
  return ano2020 - nascimento1990
  // implemente sua lógica aqui
}
console.log(imprimeIdade(2020,1990))
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 peso = prompt("digite seu peso (kg)")
 altura = prompt("digite sua altura (m)")
 console.log(peso/(altura* altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("digite seu nome")
  idade = prompt("digite sua idade")
  email = prompt("digite seu email")
  console.log("Meu nome é ,Alice, tenho 28 anos, e meu email, alice@gmail.com")

}
imprimeInformacoesUsuario()
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cores = prompt("digite tres cores favorita")
  cor1 = "Azul"
  cor2 = "Amarelo"
  cor3 = "Vermelho"
  console.log("Azul, Amarelo, Vermelho")
}
imprimeTresCoresFavoritas()
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = "oi"
  const tudoMaiusculo = frase.toUpperCase()
  console.log(tudoMaiusculo)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custos = 3000
  const valorIngressos = 100
  return  custos / valorIngressos
}
console.log( 3000/100)
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const Numeros = ["1","2","3"]
  const primeiroItem = Numeros[0]
  console.log(Numeros[0] )
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 const Numers = ["1","2","3","4","5"]
 const ultimoNumers = Numers[4]
 console.log(Numers[4])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 const palavraS = ["Ola"]
 const palavras2 =["olA"]

 console.log(palavraS.includes, palavras2.includes)
}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}