import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveNaoDeveSerCompartilhada"

const token = jwt.sign(
  {
    nome: 'boni seso',
    curso: 'segurança e node.js'
  }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);