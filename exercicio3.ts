// Crie um objeto que representa o cartão de comsumo de um cliente. Deve ter:
// Nome do cliente;
// Idade do cliente;
// Produtos consumidos;
// Cada produto pode ter:
// Nome;
// Preço; (em centavos);
// Quantidade comprada;

// Pode inventar os dados. Colque pelo menos 3 produtos;


type TProduto = {
    nome: string
    preco: number
    quantidade: number
};

type TCliente = {
    nome: string
    idade: number
    produtos: TProduto[]
};

const cartaComsumo: TCliente = {
    nome: 'Sora',
    idade: 31,
    produtos: [
        {
            nome: 'Espetinho de coração',
            preco: 1250,
            quantidade: 2
        },
        {
            nome: 'Água com gás',
            preco: 500,
            quantidade: 1
        },
        {
            nome: 'Espetinho de nuttela',
            preco: 1500,
            quantidade: 2
        }
    ]
};

// console.log(cartaComsumo);

// Faça um programa que imprima uma mensagem amigável do resumo do cartão de consumo
// (que inclui chamar o cliente pelo nome) que informe o valor que ele deve pagar;

// let valorTotal = (1250 * 2) + 500 + (1500 * 2)

let valorTotal = 0

for (let produto of cartaComsumo.produtos){
    valorTotal += produto.preco * produto.quantidade
};

console.log(`Presado cliente ${cartaComsumo.nome}, seu comsumo total tem o valor de: R$${valorTotal/100}.`);