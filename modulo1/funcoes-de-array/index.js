 // 1. Interpretaçao de codigo
 // a. vai imprimir  objeto começado pelo apelido separando array com a lista 

// 2 a. Vai imprimir só os nomes

  // 3 a. retirou a terceira array

// 1 Escrita de codigo
// A.

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
 const novaArray = pets.map((item, index, array) => {
     return item.nome
 })
 console.log(novaArray)
 
 // B.
 
const apenasPetsDeSalsicha = pets.filter((petsRaca) => {
    return petsRaca.raca === "Salsicha"
})
    console.log(apenasPetsDeSalsicha)

  // C.

const cupomPoodle = pets.filter((item,index) =>{
    return(item.nome ==="Poodle")
    
})    
    console.log("você ganhou um cupom de desconto de 10% para tosar ${item.nome}")

