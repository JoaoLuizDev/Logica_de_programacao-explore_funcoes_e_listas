# Desafios

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

### Respostas

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

```javascript
function calcularIMC(altura, peso) {
  let IMC = peso / (altura * altura);
}
```

2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

```javascript
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
```

3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

```javascript
function calcularDolar(valorDolar) {
  let cotacaoDolar = 4.80;
  let valorReais = valorDolar * cotacaoDolar;
  return valorReais.toFixed(2);
}

// Exemplo de uso
let valorDolar = 50;
let valorReais = calcularDolar(valorDolar);
console.log(`US$ ${valorDolar}, com o dólar a ${cotacaoDolar} equivalem a R$ ${valorReais}.`)
```

4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

```javascript
function calcularAreaPerimetroSalaRetangular (altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura * largura);

console.log(`Em uma sala retangular, com ${altura} de altura, e ${largura} de largura, a área será de ${area}.`);
console.log(`Em uma sala retangular, com ${altura} de altura, e ${largura} de largura, o perímetro será de ${perimetro}.`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);
```

5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

```javascript
function calcularAreaPerimetroSalaCircular (raio) {
  let Pi = 3.14;
  let area = Pi * (raio * raio);
  let perimetro = 2 * Pi * raio;

  console.log(`Em uma sala circular, com raio de ${raio} e π como ${Pi}, a área será de ${area.toFixed(2)} m².`);
  console.log(`Em uma sala circular, com raio de ${raio} e π como ${Pi}, perímetro será de ${perimetro.toFixed(2)} m².`);
}

// Exemplo de uso
let raio = 5; // Raio da sala circular em metros
calcularAreaPerimetroSalaCircular(raio);
```

6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

```javascript
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);
```