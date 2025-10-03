// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.

// Se eu tenho 18 anos e tenho CNH, então posso dirigir.

// --------------------------------//
// -----CONTEXTO DE ATRIBUIÇÃO-----//
// --------------------------------//
let idade = 18
let possuoCNH = true
let nacionalidade = 'brasileira'

// --------------------------------//
// -----CONTEXTO DE VALIDAÇÃO------//
// --------------------------------//
if(idade >= 18 && possuoCNH == true && nacionalidade == 'brasileira'){
    console.log('Eu posso dirigir')
} else {
    console.log('Eu não posso dirigir')
}
// --------------------------------//
