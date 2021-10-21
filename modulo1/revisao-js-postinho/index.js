
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return a === b
    //  Sua lógica aqui
}
console.log(checarIgualdade(1, 2));
// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
   return a > b
}     
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=
// b-) 1=='1'=
// c-) 'a'==='b'=
// d-) 'b'>'a'=
// e-) 0!==null=


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "Labenu"
    const senhaUsuario = prompt("digite sua senha:")
    
    if(senhaUsuario == login){ 
        console.log("usuario logado");
         
    }else{
        console.log("senha invalida")
    }    

    
}
console.log(login());
// Exercício 5----------------------------------------------------------------------------------------------------

function primeiraDose() {
 const nome = prompt("digite seu nome")
 const vacina = prompt("Qual vacina você tomou")
 
 if(vacina ==="coronavac") {
     tempo = 28
 } else if (vacina === "astrazenica") {
     tempo = 90
 } else if (vacina === "pfizer") {
      tempo = 90
    }
 
    return 'ola ${nome}! A proxima dose da ${vacina} é daqui ${90} dias. Compareça no posto no ${22/12/2021}'
    //  Sua lógica aqui
}
console.log(primeiraDose());


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    
    const retorno = nomeDoUsuario.map((pessoa)=>{
       if(pessoa.nome === nomeDoUsuario){
        
          console.log("nome: Barbara, imunizacao completa")

        }
    }
}     //  Sua lógica aqui} 
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    const lembrente = usuarios.filter((pessoa)=>{
        if(pessoa.imunizacao === "incompleta"){
            return true
        }
    })
    console.log(lembrente);
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuario = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())

const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());