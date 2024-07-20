const nome = 'Sora';
const idade = 31;
const temCNH = true;

const usuario = {
    nome: 'Sora',
    email: 'soraOgamy@email.com',
    idade: 31,
    temCNH: true,
    habilidades: ['JavaScript', 'HTML5', 'CSS3', 'TypeScript']
};

// console.log(usuario);

// console.log(usuario['habilidade'][0]);
// usuario['habilidades'] => acessa uma propriedade do objeto;
// usuario.habilidades => acessa uma propriedade do objeto;

usuario.nome = 'Sora Ogamy';

usuario.email = 'sora@email.com';

console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);