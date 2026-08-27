/*class funcionário   {
    constructor(nome,slario){
        this.nome= nome;
        this.salario= this.salario;
    }
    apresentar(){
        console.log(`${this.nome} ganha de salario ${this.salario}`)
    }
}

class Professor extends funcionário {
    constructor (nome,salario, disciplina){
        Super (nome, salario);
        this.disciplina;

    }
    apresentar(){
        console.log(`${this.nome} ganha de salario ${this.salario} e ministra á disciplina de ${this.disciplina}`)
}
 }*/

class Pessoa{
    apresentar(){
        console.log("Sou uma pessoa");
    }
}

class Professor extends Pessoa{
    apresentar(){
        console.log("Sou um Professor");
    }
}

class Aluno extends Pessoa{
    apresentar(){
        console.log("Sou um Aluno");
    }
}