let randomPc = Math.floor(Math.random()*6 + 1);
console.log(randomPc);

let randomUtente = Math.floor(Math.random()*6 + 1);
console.log(randomUtente);

if (randomPc > randomUtente){
    console.log("Ha vinto il PC!")
} else if(randomPc < randomUtente){
    console.log("Ha vinto l'utente!")
} else{
    console.log("La partita è finita in parità!")
}