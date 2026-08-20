class funcionário{
    constructor(nome, salario){
        this.none = nome;
        this.salario = salario;
    }
}

class professor extends funcionário{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new professor("Jansen", 50000, "Devops");
console;log(professor)