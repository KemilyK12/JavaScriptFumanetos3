class Pessoa{
    #nome;

    constructor(nome){
        this.#nome = nome
 
    }
    get nome(){
        return this.#nome
    }

    set nome(valor){
        if(valor.length >= 2) this.#nome = valor;
    }
}
const pessoa = new Pessoa("Pedro");
console.log(pessoa.nome);
pessoa.nome = "Igor";
console.log(pessoa.nome);
