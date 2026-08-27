const aluno = {
    nome: "Manu",
    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
    }
};
aluno.apresentar();