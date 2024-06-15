let numeros = [0,1,2,3,4,5,6,7,8,9]

let calc = numeros.reduce((total, number) => total + number, 0)
console.log(calc)

const pares = numeros.filter(n=> {return n%2 == 0})
console.log(pares)

let quadrados = numeros.map(n => {return n**2})
console.log(quadrados)

// Exercicio 4
class Produto{
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    vender(quantidadeVenda){
        if(quantidadeVenda <= this.quantidade){
            this.quantidade-=quantidadeVenda;
            console.log(this.quantidade);
        } else{
            console.log("Estoque insuficiente")
        }
            
    }

    repor(quantidadeReposicao){
        this.quantidade+=quantidadeReposicao;
        console.log(this.quantidade);
    }

    mostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`)
    }

    atualizarPreco(novoPreco){
        this.preco = novoPreco;
        console.log(this.preco);
    }
}

const caneta = new Produto('CANETA BIG AZUL', 6, 5)
caneta.mostrarEstoque();