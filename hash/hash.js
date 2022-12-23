import { createHash } from 'crypto';

function criaHash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("certificationJava2023"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!!");
      return false;
    }

    console.log("Usuário ou senha incorretos.");
    return false;
  }
}

const usuario = new Usuario('Boni SeSo', 'seso6');

console.log(usuario);

// Caso de sucesso:
usuario.autentica('Boni SeSo', 'seso6');

// Casos de insucesso:
usuario.autentica('Boni SeSo', 'Seso6');
usuario.autentica('boni', 'seso6');