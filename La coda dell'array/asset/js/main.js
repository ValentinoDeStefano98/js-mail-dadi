// Primo esercizio bonus
let array = [1, 3, 5, 7, 6, 8, 5, 3, 4, 5, 6, 1];

for ( i = array.length - 5; i < array.length; i++){
    console.log(array[i]);
}

// Secondo esercizio bonus
let numeroElementi = prompt("Quanti elementi deve contenere la lista?");

if (numeroElementi <= 0){
    alert("Attenzione! Inserisci un valore corretto!");
}

let arrayVuoto = [];

for (let i = 0; i < numeroElementi; i++){
    let elementoCasuale = Math.floor(Math.random()*99999);
    arrayVuoto[i] = elementoCasuale;
}   

console.log(arrayVuoto);

// Terzo esercizio bonus
let numeroEstratti = prompt("Quanti elementi vuoi estrarre dal fondo della lista?");

for (i = (arrayVuoto.length - numeroEstratti); i < arrayVuoto.length; i++){
    console.log(arrayVuoto[i]);
}