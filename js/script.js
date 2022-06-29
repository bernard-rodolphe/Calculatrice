function clearScreen(){
    //console.log("Clear je suis cliqué")
    document.getElementById("result").value=""
}

function display(value){
    //console.log(value)
    document.getElementById("result").value += value ;
}

function calculate(){
    //console.log("Calculez, je suis calculé")
    let total;
    total = eval(document.getElementById("result").value);
    document.getElementById("result").value=total;

    
}



