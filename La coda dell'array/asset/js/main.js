let array = [1, 3, 5, 7, 6, 8, 5, 3, 4, 5, 6, 1];

for ( i = array.length - 5; i < array.length; i++){
    console.log(array[i]);
}

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