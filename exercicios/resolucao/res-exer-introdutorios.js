// 1. Se ontem foi quarta-feira, amanhã será...
// qual é o contexto da pergunta? fala sobre o que?
// sabendo o "oque será sendo falado!", exite agora?

/*
let array = ['domingo','segunda','terça', 'quarta','quinta','sexta','sábado']
console.log(array[0])//domingo
console.log(array[1])//segunda
console.log('o número de itens do meu arrey é ' + array.length)//mostra numero de itens no array (que são 7)
//tamanho do meu arrey -1, sempre sera o índice máximo do meu arrey
console.log('Índice máximo do arrey é ' + Number(array.length -1))//(que são 6)*/

/*let ontem = 'quarta'
let hoje = 'quinta'
let amanha = 'sexta'*/
console.log('1. Se ontem foi quarta-feira, amanhã será...')
console.log('R: sexta - feira')
console.log('--------------------------------------------')
//----------------------------------------------------------


// 2. Complete a sequência: 1, 4, 9, 16, 25, ...
console.log('2. Complete a sequência: 1, 4, 9, 16, 25, ...')
for(let i = 1; i <= 6; i++ ){
    console.log(i * i)
}
console.log('--------------------------------------------')

// 3. Um trem de 100 metros de comprimento viaja a 50 km/h. Quanto tempo levará para atravessar um túnel de 50 metros?
console.log('3. Um trem de 100 metros de comprimento viaja a 50 km/h. Quanto tempo levará para atravessar um túnel de 50 metros?')
let distancia = 100 + 50
let velocidade = 50 * 1000 / 3600
let tempo = distancia / velocidade

console.log("O trem levará", tempo.toFixed(2), "segundos para atravessar o túnel.")
console.log('--------------------------------------------------------------------')

// 4. Júlia é mais alta que Ana. Ana é mais baixa que Bruno. Qual dos três é o mais alto?
console.log('4. Júlia é mais alta que Ana. Ana é mais baixa que Bruno. Qual dos três é o mais alto?')
let alto = 'Bruno'
let medio = 'Júlia'
let pequeno = 'Ana'
console.log('R: Júlia')
console.log('--------------------------------------------------------------------------------------')

// 5. Em uma sala, há 2 pais e 2 filhos. Qual o número mínimo de pessoas na sala?
console.log('5. Em uma sala, há 2 pais e 2 filhos. Qual o número mínimo de pessoas na sala?')
let array = ['avô','pai','filho']
console.log('O número mínimo de pessoas na sala é: ' + array.length)
console.log('------------------------------------------------------------------------------')

//6. Se o código para "GATO" é 4130, qual é o código para "PATO"?
console.log('6. Se o código para "GATO" é 4130, qual é o código para "PATO"')



/*
let email = 'leticia@gmail.com '

if (email.trim() == 'leticia@gmail.com'){ //.trim tira os espaços e valida
    console.log('Email com trim ' + '"' + email.trim() + '"')
    console.log('E-mail válido!')
} else {
    console.log('E-mail não válido!')
}
*/
