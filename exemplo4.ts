type TCarro = {
    modelo: string
    marca: string
    ano: number
    cor?: string
};

const carro: TCarro = {
    modelo: 'Pálio',
    marca: 'Fiat',
    ano: 2000,
    cor: 'Vermleho'
};

console.log(carro);

// type TPessoa = {
//     nome: string,
//     senha: number
// }

// const listaNomes = ['Guido', 'João', 'Maria', 'Pedro', 'Joana', 'Ana']

// const pessoas: TPessoa[] = []

// for (let i = 0; i < listaNomes.length; i++){
//     pessoas[i] = {
//         nome: listaNomes[i],
//         senha: i + 1
//     }
// };

// console.log(pessoas);
