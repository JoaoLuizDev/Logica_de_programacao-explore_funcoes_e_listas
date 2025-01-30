# Desafios

1. Criar uma função que exibe "Olá, mundo!" no console.

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

### Respostas

1. Criar uma função que exibe "Olá, mundo!" no console.

```javascript
function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();
```

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

```javascript
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");
```

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

```javascript
function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
```

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

```javascript
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);
```

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

```javascript
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
```

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

```javascript
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
```