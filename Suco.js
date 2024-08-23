//Criar um array para armazenar os produtos.
//Implementar uma função para adicionar novos produtos ao array.
//Validar os dados antes de cadastrar um produto 
//(certifique-se de que todos os campos estão preenchidos e que 
//o preço e a quantidade em estoque são maiores que 0).
//Implementar uma função para listar todos os produtos cadastrados.
//Implementar uma função para calcular e exibir o valor total dos produtos em estoque 
//(preço * quantidade).

const produto =  ["Tv"]

function carrinho(preço, quantidade){
    produto.push(preço = 50, quantidade = 2)
    if(preço <= 0){
        console.log("Preço e produto invalido!")
    }if(quantidade <= 0){
        console.log("Quantidade inválida!")
    }
}

carrinho()

function listar(){
    console.log(produto)
}
listar()

function preçototal(preço, quantidade){
    preço = 50
    quantidade = 2
    console.log(preço*quantidade + " real(s) é o Preço total!")
}

preçototal()