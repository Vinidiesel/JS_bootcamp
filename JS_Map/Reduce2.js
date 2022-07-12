 lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];
Saldo = 100;

function calculaSaldo(lista,saldo){
    if (!saldo || !lista || !lista.length) return 'Envie todos os parâmetros';
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index+1);
        console.log({prev});
        console.log({current});
        return prev-current.preco;
    }, saldo);
}

console.log(calculaSaldo(lista,Saldo));