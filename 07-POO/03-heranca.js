class Pessoa{
destructor(nome){
    this.nome = nome;
}
}

class Aluno extends Pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const aluno = new aluno ("Jerfferson","Desenvolvimento de Sistemas");
console.log(aluno);