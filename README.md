# Node.js: criptografia e tokens JWT

<img src="/logos/JavaScript.png" alt="Logo JavaScript" width="60" height="60"></img> <img src="/logos/VS Code.png" width="60" height="60"></img>

*****

## Links úteis:
+ [Tabela ASCII](https://www.ime.usp.br/~pf/algoritmos/apend/ascii.html)
+ [JavaScript: Cifra de César](https://www.youtube.com/watch?v=utiLWBXmNQU&t=9s)

## Etapas do treinamento:
1. Conhecendo problema
2. Utilizando o módulo crypto
3. Tranmissão de dados
4. Assinatura e JWT
5. Conhecendo alguns ataques
6. Considerando a parte humana

*****

## Habilidades desenvolvidas neste curso de Node.JS
* Conhecer a história da criptografia;
* Entender o contexto atual dessa área de estudos;
* Aprender **algoritmos** e **processos de encriptação**;
* Compreender **hashes**, **tokens** e **assinaturas**;
* Realizar implementações com o módulo **crypto do Node.js**;
* Simular ataques criptográficos; e
* Considerar o fator humano das aplicações.

## 1. Conhecendo problema
**Conhecimentos adquiridos nesta etapa:**
* As origens da criptografia e seus primeiros usos, isto é, sua utilização na comunicação militar e aplicações em conflitos;
* Os conceitos e utilização das cifras, em especial a cifra de césar, que poderia ser realizada facilmente sem um poder computacional muito avançado;
* Quais são os usos atuais que dependem da criptografia, tal qual sistemas de mensageria e armazenamento de informação pessoal;
* A diferença entre Autorização e autenticação, isto é, a capacidade de confirmar uma permissão e identidade, respectivamente.

~~~JavaScript
const senhaSecreta = "boniseso";

function cifrarMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  })
  return mensagemCifrada.join('');
}

const mensagemCifrada = cifrarMensagem(senhaSecreta, 5);
~~~

## 2. Utilizando o módulo crypto