# Função para calcular fatorial

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

## Definição da Função
```javascript
function calcularFatorial(numero) {
}
```

### Explicação
Cria uma função chamada calcularFatorial que recebe um número como entrada (numero).

## Tratando Casos Especiais
```javascript
if (numero === 0 || numero === 1) {
  return 1;
}
```

### Explicação
Por definição matemática, o fatorial de 0 e de 1 é sempre 1. Exemplo:
```0! = 1``` e ```1! = 1```.

Como funciona? Se o número for ```0``` OU ```(||)``` ```1```, a função retorna 1 imediatamente.

## Calculando o Fatorial para Números Maiores que 1
```javascript
let fatorial = 1;
for (let i = 2; i <= numero; i++) {
  fatorial *= i; // Equivalente a: fatorial = fatorial * i
}
return fatorial;
```

### Inicialização
Começamos com ```fatorial = 1``` (o elemento neutro da multiplicação).

### Loop (Repetição)
Usamos um ```for``` para multiplicar sequencialmente:

- ```i``` começa em 2 (porque multiplicar por 1 não altera o resultado).
- O loop continua enquanto ```i <= numero```.
- Em cada iteração, multiplicamos ```fatorial``` pelo valor atual de ```i``` ```(fatorial *= i)```.

## Exemplo com numero = 5

```
i=2 → fatorial = 1 * 2 = 2  
i=3 → fatorial = 2 * 3 = 6  
i=4 → fatorial = 6 * 4 = 24  
i=5 → fatorial = 24 * 5 = 120  
```
Resultado Final: Retorna ```120``` (que é ```5!```).

## Exemplo de Uso:

```javascript
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
```

O que acontece?

Chama calcularFatorial(5), que retorna 120.

Mostra no console: "O fatorial de 5 é 120".