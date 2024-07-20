const usuario = {
    nome: 'Sora',
    idade: 31,
    email: 'sora@email.com',
    endereco: {
        rua: 'Rua A',
        numero: 132
    }
};

const {nome, idade, email, endereco: {numero, rua}} = usuario;

console.log(numero);
