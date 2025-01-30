# Desafios
Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

### Respostas
1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:
```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
```

2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:

```html
<button onclick="exibirMensagemNoConsole()" class="button">Console</button>
```

```javascript
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}
```

3. Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:

```html
<button onclick="exibirAlerta()" class="button">Alert</button>
```

```javascript
function exibirAlerta() {
    alert('Eu amo Js')
}
```

4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:

```html
<button onclick="exibirPrompt()" class="button">Prompt</button>
```

```javascript
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}
```

5. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

```html
 <button onclick="somandoDoisNumeros()" class="button">Soma</button>
```

```javascript
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}
```