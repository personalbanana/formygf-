
const redbutton = document.getElementById("btn") ;
let playarea = document.getElementById("divbtn") ;
let newbutton = document.createElement("BUTTON");
let wrd = document.getElementById("text") ;
let count = 0 ;
let newcount = 0 ;
let img1 = document.getElementById("img_1") ;
let img2 = document.getElementById("img_2") ;
let img3 = document.getElementById("img_3") ;
let img4 = document.getElementById("img_4") ;
let img5 = document.getElementById("img_5") ;

redbutton.textContent = "Click Me" ;
//eventlisenter
redbutton.addEventListener('click', () => onButtonClick()) ;
newbutton.addEventListener('click', () => onnewButtonClick()) ;

//redbutton

function onButtonClick() {count ++;








        if ( count == 1 ) {
            wrd.innerText = "This to my Girlfriend";
            redbutton.textContent = "Click Me" ;
            playarea.removeChild(newbutton)
        }
        
        else if (count == 3)  {
        playarea.appendChild(newbutton);
        wrd.innerText = "Are you my Girlfriend?";
        newbutton.textContent = "No" ;
        redbutton.textContent = "Yes" ;
        }
        
        
        else if ( count == 4 ) {
            wrd.innerText = "YAY!";
            playarea.removeChild(newbutton);
            redbutton.textContent = "Click me" ;
        }
        
        if (count == 5) {
            wrd.innerText = "Hi :)";
        }
        
        if (count == 6) {
            wrd.innerText = "I got something for you...";
        }
        
        if (count == 7) {
            wrd.innerText = "KABOOM";
            img1.innerHTML = "<img src='imgs/roses.jpg' alt='FLOWERS'>"
        }
        
        if (count == 8) {
            wrd.innerText = "KABOOM \n KABOOM";
            img2.innerHTML = "<img src='imgs/sunflowers.jpg' alt='FLOWERS'>"
        }
        
        if (count == 9) {
            wrd.innerText = "KABOOM \n KABOOM \n KABOOM";
            img3.innerHTML = "<img src='imgs/tulips.jpg' alt='FLOWERS'>"
        }
        
        if (count == 10) {
            wrd.innerText = "KABOOM \n KABOOM \n KABOOM \n KABOOM";
            img4.innerHTML = "<img src='imgs/lilys.jpg' alt='FLOWERS'>"
        }
        
        if (count == 11) {
            wrd.innerText = "KABOOM \n KABOOM \n KABOOM \n KABOOM \n KABOOM";
            img5.innerHTML = "<img src='imgs/daisys.jpg' alt='FLOWERS'>"
        }
        
        if (count == 12) {
            wrd.innerHTML = "<img src='imgs/smile.jpg' alt='FLOWERS'>";
        }
        
        if (count == 13) {
            wrd.innerText = "You like them?";
            redbutton.innerText = "Yes"
        }
        
        if (count == 14) {
            wrd.innerText = "Good.";
        }
        
        }

        
 

//greenbutton

function onnewButtonClick() {newcount ++;

       
    if (newcount == 1)  {
        wrd.innerText = "Oh...";
        playarea.removeChild(redbutton);
        newbutton.textContent = "Click me" ;
    }
    
    else if (newcount == 4)  {
        wrd.innerText = "Can you get her?";
        playarea.appendChild(redbutton);
        newbutton.textContent = "No" ;
        count = 0;
    }
    
    if (newcount == 5)  {
        wrd.innerText = "Oh...";
        playarea.removeChild(redbutton);
        newbutton.textContent = "Click me" ;
    }
    
    if (newcount == 6)  {
        wrd.innerText = "Bye.";
        playarea.removeChild(newbutton);
    }
else if (newcount == 34)  {wrd.innerText = "";}

else if (newcount == 200)  {wrd.innerText = "Oh...";
                            playarea.appendChild(redbutton)}

else if (newcount == 210)  {wrd.innerText = "You're still here.";}

else if (newcount == 214)  {wrd.innerText = "Why?";}

else if (newcount == 217)  {wrd.innerText = "Go do somthing with your life";}

else if (newcount == 220)  {wrd.innerText = "Weirdo.";
                            playarea.removeChild(redbutton)
                            playarea.removeChild(newbutton)

}

}

//else if (count == )  {wrd.innerText = "";}
//else if (newcount == )  {wrd.innerText = "";}