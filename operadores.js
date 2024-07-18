// OPERADORES ARITMÉTICOS
// + - * / ** %

const numero1 = 10;
const numero2 = 20;
const resultado_ = numero1 + numero2; // Adição
const subtracao = numero1 - numero2; // Subtração
const multiplicacao = numero1 * numero2; // Multiplicação
const divisao = numero1 / numero2; //Divisão
const expoente = numero1 ** 2; // Potência
const restoDaDivisao = numero1 % 2; // Resto
console.log(resultado_, subtracao, multiplicacao, divisao, expoente, restoDaDivisao);

// OPERADORES DE COMPARAÇÃO
// TIPOS DE DADOS PRIMITIVOS
// String, Number, Boolean, Null, Underfined

// DADOS COMPOSTO - array

// DADOS DE OBJETO - object

// OPERADORES LÓGICOS - boolean
const valor1 = 10;
const valor2 = 20;
const valor3 = '10';

// COMPARA VALOR E NÃO COMPARA TIPO
let resultado = valor1 == valor3; //True (==)
// COMPARA VALOR E COMPARA TIPO
resultado = valor1 === valor3; //False (===)
resultado = valor1 > valor2; // False
resultado = valor1 >= valor2; // False
resultado = valor1 < valor2; // True
resultado = valor1 <= valor2; // True

// -------------------------------------------

resultado = 10 > 9 && 5 > 4; // && true
resultado = 10 > 9 || 5 < 4; // || false

resultado = 10 < 9 || 5 < 4; // || false
resultado = 10 > 9 && 5 < 4; // && false


// -------------------------------------------

// IF TERNÁRIO

if (10 > 9) {
    console.log("10 é maior que 9");
} else {
    console.log("10 é menor que 9");
}