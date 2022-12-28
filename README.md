# Node.js: criptografia e tokens JWT

<img src="/logos/JavaScript.png" alt="Logo JavaScript" width="60" height="60"></img> <img src="/logos/VS Code.png" width="60" height="60"></img>

*****

## Links úteis:
+ [Tabela ASCII](https://www.ime.usp.br/~pf/algoritmos/apend/ascii.html)
+ [JavaScript: Cifra de César](https://www.youtube.com/watch?v=utiLWBXmNQU&t=9s)
+ [Buffer objetos são usados para representar uma sequência de bytes de tamanho fixo](https://nodejs.org/api/buffer.html)
+ [A documentação oficial do NodeJS fornece vários métodos do módulo crypto e outros módulos](https://nodejs.org/api/crypto.html)
+ [JWT (JSON Web Token)](https://jwt.io/)
+ [Os ataques Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
+ [Artigo - Como criar uma boa senha](https://www.alura.com.br/artigos/como-criar-uma-boa-senha)

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
* Os conceitos e utilização das cifras, em especial a **Cifra de César**, que poderia ser realizada facilmente sem um poder computacional muito avançado;
* Usos atuais que dependem da criptografia, tal qual sistemas de mensageria e armazenamento de informação pessoal;
* Diferença entre autorização e autenticação, isto é, a capacidade de confirmar uma permissão e identidade, respectivamente.

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
**Conhecimentos adquiridos nesta etapa:**
* O que são funções de **hash** e seu funcionamento prático para gerar dados que não podem ser restaurados à seu valor original;
* Aplicações práticas das funções de **hash**, como o uso em sistemas de autenticação;
* Implementação dos métodos do **módulo crypto**, como o ***createHash***;
* Como utilizar o “sal” para melhorar a eficácia das **hashes**, aumentando drasticamente a quantidade de possibilidades existentes para um algoritmo de encriptação.

## 3. Transmissão de dados
**Conhecimentos adquiridos nesta etapa:**
* Como transmitir informações de forma mais segura utilizando o conceito de encriptação: a cifra moderna;
* Os conceitos de **chaves compartilhadas**, **públicas** e **privada**. Sendo as compartilhadas um sistema de criptografia que mantém a chave entre o emissor e receptor da mensagem, ou seja, a mesma chave é utilizada para encriptar e desencriptar a mensagem ou arquivo. Já a **chave pública** funciona em conjunto com a privada, e atua como uma assinatura digital, ela pode ser compartilhada, enquanto que, a **chave privada** é mantida em segredo e utilizada para desencriptar as mensagens ou arquivos autenticados pela chave pública;
* Como a encriptação simétrica e assimétrica usam essas chaves para decifrar as mensagens de forma prática e segura;
* A implementar essas funcionalidades dentro do Node com o módulo crypto.

## 4. Assinatura e JWT
**Conhecimentos adquiridos nesta etapa:**
* Funcionamento das assinaturas no contexto digital para garantir a autoria e integridade de uma mensagem;
* Sessão e formas de como elas são implementadas - os identificadores únicos ou tokens;
* Tokens e como eles são utilizados para autenticação ou transmissão de informação de forma segura;
* **Token JWT** *(JSON Web Token)*, seus parâmetros, campos e usos;
* Como implementar uma assinatura com o Node e utilizar uma biblioteca para utilizar o token JWT.

## 5. Conhecendo alguns ataques
**Conhecimentos adquiridos nesta etapa:**
* O que são algoritmos criptográficos e quais parâmetros existem em cada um;
* Ataques (Rainbow Table, Força Bruta e Dicionário) e as vulnerabilidades que podemos estar sujeitos e devemos ter atenção enquanto implementamos soluções;
* Recursos e atitudes que podemos utilizar para mitigar problemas relacionados à nossa infraestrutura tecnológica.

## 6. Considerando a parte humana
**Conhecimentos adquiridos nesta etapa:**
* Fatores humanos e quais considerações devemos levar em conta quando estamos desenvolvendo sistemas;
* Como escolher requisitos de forma crítica e ponderar sobre as decisões de segurança;
* Os cuidados que devemos tomar com as dependências que utilizamos e tentar conhecer os riscos associados.