var readlineSync = require('readline-sync');

var p1 = readlineSync.questionInt("Qual a nota da prova 1: ")

var p2 = readlineSync.questionInt("Qual a nota da prova 2: ")

var final = ( p1 + p2 ) / 2 

if ( final >= 8 && final <= 10 ) {

    console.log(`Nota final ${final}. O aluno foi aprovado`)    

} else if ( final >= 6 && final <= 7.5 ) {

    console.log(`Nota final ${final}. O aluno esta de recuperação`)    

} else if ( final <= 5.5 ) {

    console.log(`Nota final ${final}. O aluno foi reprovado`)    

}
