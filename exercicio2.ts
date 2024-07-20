// Crie um sistema de distribuição de senha por ordem de chegada
// a fila será representada pelo array ['Guido', 'João, 'Maria', 'Pedro', 'Joana', 'Ana']
// Você deve criar uma nova lista onde cada item represente um objeto contendo a senha e o nome da pessoa.
// A senha começa sempre em 1.

const listaNomes = ['Guido', 'João', 'Maria', 'Pedro', 'Joana', 'Ana']

const pessoas = []

for (let i = 0; i < listaNomes.length; i++){
    pessoas[i] = {
        nome: listaNomes[i],
        senha: i + 1
    }
};

console.log(pessoas);