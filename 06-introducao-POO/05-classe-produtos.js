class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual){
        this.preco = this.preco - (this.preco * (percentual/100));
        //this.preco -= (this.preco * (percentual / 100));
    }
    valorPagar(){
        console.log(`Valor a pagar = R${this.preco.toFixed(2)}`)
    }
}
const produto = new Produto("Mouse", 100);
produto.valorPagar();
produto.aplicarDesconto(10);
console.log(produto)
produto.valorPagar();