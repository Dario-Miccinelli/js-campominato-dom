let gridContainer = document.getElementById('griglia');

let bombsArray = [];


function myFunction() {
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
        
    }

    else {
        div.innerText = num;
    }

    return div;

}


    for(i = 1; i <= 100; i++){ 

     let quadrato = creaQuadrato(i); // ok
     if(bombsArray.includes(i)){

        quadrato.addEventListener("click", 
        function creaQuadrato(){
            
            this.classList.toggle("bg-danger")
            if(!alert('Peccato :( hai perso! schiaccia ok per giocare ancora'))
            
            {window.location.reload();}
        })

    }

    else{
        
        quadrato.addEventListener("click", 
        function creaQuadrato(){
            
            this.classList.toggle("bg-primary")
            
        })

    }
     
        console.log(quadrato.innerText);

         griglia.append(quadrato)
    
     } 
     

    


    }