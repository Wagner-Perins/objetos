// Declare uma variavel que armazena um objeto contendo as seguintes
// propriedade: nome, idade, altura, temCNH, e habilidades.

// Depois, faça um programa que imprime na tela o belo texto abaixo
// substituindo os dados dados pessoais pelos dados do objeto:

// Guido tem 33 anos, 1.87m de altura, possui CNH e as seguintes habilidades:
// - JavaScript
// - PHP
// - Python
// - Java

const user = {
    nome: 'Guido',
    idade: 33,
    altura: '1.87m',
    temCNH: true,
    habilidades: ['JavaScript', 'PHP', 'Python', 'Java']
};

const possuiCNH = user.temCNH ? 'possui CNH' : 'não possui CNH';

console.log(`${user.nome} tem ${user.idade} anos, ${user.altura}, ${possuiCNH} e as seguintes habilidades: `);
for (let item of user.habilidades){
    console.log(`- ${item}`)
};