// Rest -> Resto ou sobra;
// array

const pessoas = ['Sora', 'Michelle', 'Hinna'];
const [item1, ...outrosItens] = pessoas;

// objeto

const uruario = {
    nome: 'Sora',
    email: 'sora@email.com',
    idade: 31
};
const {idade, ...resto} = uruario;

// console.log(resto);

// Spread -> Espalhamento;
// array

const carros = ['Skyline', 'Impalla'];
const novosCarros = [...carros, 'CamaroSS', 'Golf'];

//objeto

const carro = {
    ano: 1994,
    cor: 'Preto'
};

const informacoesCarro = {
    portas: 4,
    potencia: 180
};

const carroCompleto = {
    ...carro,
    ...informacoesCarro,
    marca: 'Nissan',
    modelo: 'Skyline'
};

console.log(carroCompleto);
