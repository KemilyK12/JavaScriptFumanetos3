function apresentar(nome) {
    console.log("Ola, " + nome);

}
apresentar("Kemily");

function sistema(nome = "Visitante") {
    console.log("Ola, " + nome);
}
sistema();
sistema("Kemily");

function somar(numero1, numero2) {
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}
somar(10, 5);
