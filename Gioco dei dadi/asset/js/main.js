let randomPc;
let randomUtente;

let buttonPc = document.getElementById("guestNumber");

buttonPc.addEventListener("click",
    function(){
    randomPc = Math.floor(Math.random()*6 + 1);
    }
);

let buttonUtente = document.getElementById("yourNumber");

buttonUtente.addEventListener("click",
    function(){
    randomUtente = Math.floor(Math.random()*6 + 1);
    }
);

let buttonResult = document.getElementById("result");

buttonResult.addEventListener("click",
    function(){
        if (randomPc == null || randomUtente == null){
            alert("Attenzione! Genera prima i numeri!");
            return;
        }
        document.getElementById("numberUtente").innerHTML = `Il tuo numero è: ${randomUtente}`;
        document.getElementById("numberPC").innerHTML = `Il numero del tuo avversario è: ${randomPc}`;
        if (randomPc > randomUtente){
            document.getElementById("score").innerHTML = "Ha vinto il PC!";
        } else if(randomPc < randomUtente){
            document.getElementById("score").innerHTML = "Hai vinto!";
        } else{
            document.getElementById("score").innerHTML = "Parità!";
        }
    }
);

