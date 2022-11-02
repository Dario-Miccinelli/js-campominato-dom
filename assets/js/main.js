let gridContainer = document.getElementById('griglia');

let bombsArray = [];



while (bombsArray.length < 16) {
    let randomBombNumber = Math.round(Math.random() * (100-1)) +1;

    if (bombsArray.includes (randomBombNumber)) {

    }

    else{
        bombsArray.push(randomBombNumber)
    }
}

console.log (bombsArray);

function creaQuadrato(num) {
    let div = document.createElement("div");
    div.classList.add("quadrato");

    if (bombsArray.includes(i)){
        div.innerText = num;
        div.classList.toggle("bg-danger")
    }

    else {
        div.innerText = num;
    }

    return div;

}


    for(i = 1; i <= 100; i++){ 

     let quadrato = creaQuadrato(i);
     quadrato.addEventListener("click", function attivaQuadrato(){
        console.log(this);
        this.classList.toggle("bg-primary")

        if(bombsArray.includes(i)){

          
        }

        })
     
        console.log(quadrato.innerText);

         griglia.append(quadrato)
    
     } 
     

    


