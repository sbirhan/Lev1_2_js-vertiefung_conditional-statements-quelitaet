const result = document.getElementById("quelitaet")

function weather(quality){
    if (quality<0){
        window.alert("Bitte geben Sie einen Wert zwischen 0 und 10 ein.");
        document.getElementById("ergebnis").value = 0;
    }
    else if (quality<3){
        result.innerHTML = "Schlecht!";
    }
    else if (quality<6){
        result.innerHTML = "Okay!";
    }
    else if (quality<8){
        result.innerHTML = "Gut!";
    }
    else if (quality<=10){
        result.innerHTML = "Super!";
    }
    else{
        window.alert("Bitte geben Sie einen Wert zwischen 0 und 10 ein.");
        document.getElementById("ergebnis").value = 0;
    }
}

function count(){
    
    weather(parseInt(document.getElementById("ergebnis").value));

    document.getElementById("test").innerHTML = parseInt(document.getElementById("ergebnis").value);

}
