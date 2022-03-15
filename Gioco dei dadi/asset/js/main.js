let randomPc;
let randomUtente;

let buttonPc = document.getElementById("guestNumber");

buttonPc.addEventListener("click",
    function(){
        buttonPc.classList.add("click");
        randomPc = Math.floor(Math.random()*6 + 1);
    }
);

let buttonUtente = document.getElementById("yourNumber");

buttonUtente.addEventListener("click",
    function(){
        buttonUtente.classList.add("click");
        randomUtente = Math.floor(Math.random()*6 + 1);
    }
);

let buttonResult = document.getElementById("result");
let box = document.getElementById("box-score");

buttonResult.addEventListener("click",
    function(){
        if (randomPc == null || randomUtente == null){
            alert("Attenzione! Genera prima i numeri!");
            return;
        }
        box.classList.add("boxEdit")
        buttonResult.classList.add("click");
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

