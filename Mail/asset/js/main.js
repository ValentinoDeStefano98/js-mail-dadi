// Dichiaro l'array
let mail = ["valentino.destefano46@gmail.com", "pincopallo@hotmail.com", "gino.libero@gmail.com"]
console.log(mail);

let mailPersonale = prompt("Inserisci la tua mail:");
let mailTrovata = false;

for (let i=0; i < mail.length; i++){
    if ( mailPersonale == mail[i]){
        mailTrovata = true;
    }
}

if ( mailTrovata == true){
        console.log("sei già registrato");
    } else{
        console.log("non risulti registrato, corri a farlo!")
    }