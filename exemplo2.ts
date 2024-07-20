// const usuarios = ['Sora', 'João', 'Maria'];

const usuarios = [
    {
        nome: 'Sora',
        email: 'sora@email.com',
        idade: 31
    },
    {
        nome: 'João',
        email: 'joao@emil.com'
    },
    {
        nome: 'Maria',
        email: 'maria@email.com'
    }
]

for (let usuario of usuarios){
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
}