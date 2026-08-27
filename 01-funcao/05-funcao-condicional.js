function verificadorAprovacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado"
}
//ou:
//     if(media >= 7){
//     return "Aprovado"
//     }
//     return "Reprovado"
// }
console.log(verificadorAprovacao(8));