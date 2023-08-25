/*
function calcularsoma(a, b ){
    const soma = a + b
    return soma
}
    const soma = calcularsoma(3, 4)
    console.log(soma)
*/
/*
function retornaarray (numbers) {
const primeiroValor = numbers[0] / 2
const segundoValor = numbers[4] / 2

let novoarray = []
novoarray.push(primeiroValor, segundoValor)
return novoarray
}
const reduzarray = retornaarray([10, 8, 6, 4,  2])
console.log(reduzarray)
*/

/*const calcularsoma = (a , b) => {
    const soma = a + b
    return soma
}
const resultado = calcularsoma(5, 9)
console.log(resultado)
*/

//Exercicío de Funções

//Exercicío 1
//a) Vai imprimir essas 2 minhaFuncao multiplicadas por 5
//b) Ele vai cagar pro 2 e vai multiplicar direto para o 10

//Exercicío 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase(textoDoUsuario).includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
