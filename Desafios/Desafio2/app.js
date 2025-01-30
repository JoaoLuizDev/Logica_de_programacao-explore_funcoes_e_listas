function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();

function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("João Luiz");

function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(3);
console.log(resultadoDobro);

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(10, 34, 40);
console.log(media);

function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(34, 40);
console.log(maiorNumero);

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(34);
console.log(resultado); 
