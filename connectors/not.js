// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir caso:
// Maior de idade
// Possui habilitação
// Ser brasileiro
// --------------------------------//
// -----CONTEXTO DE ATRIBUIÇÃO-----//
// --------------------------------//
let idade = 18
let possuiCNH = true
let nacionalidade = 'brasileira' 
let minhaValidacao = idade >= 18 && possuiCNH == true && nacionalidade == 'brasileira'
//console.log('Valor real da minha validação:', minhaValidacao)
//console.log('Valor negado da minha validação:', !minhaValidacao)
let possuiInformacao = possuiCNH ? 'Possui CNH' : nacionalidade === 'brasileiro' ? 'Nacionalidade' : 'Outros'
console.log(possuiInformacao)

// Imagina
//
let repostaDaApi = null
let users = repostaDaApi ?? 'Dados do Ususario {}' // nullish
console.log('users', users)

// --------------------------------//
// -----CONTEXTO DE VALIDAÇÃO------//
// --------------------------------//
//if(!(idade >= 18 && possuiCNH == true && nacionalidade == 'brasileira')){
//    console.log('Você pode dirigir!!')
//} else {
//    console.log('Você não pode dirigir!!')
//}

//----------------------------------//