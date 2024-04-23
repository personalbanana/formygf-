
const redbutton = document.getElementById("btn") ;
let playarea = document.getElementById("divbtn") ;
let newbutton = document.createElement("BUTTON");
let badbutton = document.getElementById("bad");
let wrd = document.getElementById("text") ;
let count = 0 ;
let newcount = 0 ;
let badcount= 0;
let img1 = document.getElementById("img_1") ;
let img2 = document.getElementById("img_2") ;
let img3 = document.getElementById("img_3") ;
let img4 = document.getElementById("img_4") ;
let img5 = document.getElementById("img_5") ;

redbutton.textContent = "Click Me" ;
//eventlisenter
redbutton.addEventListener('click', () => onButtonClick()) ;
newbutton.addEventListener('click', () => onnewButtonClick()) ;
badbutton.addEventListener('click', () => onbadButtonClick()) ;
//redbutton
playarea.removeChild(badbutton)
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
            redbutton.innerText = "Click me"

        }

        else if (count == 15){
            wrd.innerText = "I dont know what else to put..."
        }
        
        else if (count == 16){
            wrd.innerText = "how are you?"
            playarea.appendChild(badbutton);
            badbutton.innerText = "Bad";
            redbutton.innerText = "Good";
            redbutton.style.color = "green";

        }

        else if (count == 17){
            wrd.innerText = "YAYYAYAYAAYA!!!!";
            redbutton.innerText = "Click me";
            redbutton.style.color = "white";
            playarea.removeChild(badbutton);

        }

        else if (count == 18){
            wrd.innerText = "Go tell me about it pls:)"
        }

        else if (count == 19){
            wrd.innerText = "The End.😃";
            playarea.removeChild(redbutton);
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
}

function onbadButtonClick() {badcount ++;
    if (badcount == 1)  {wrd.innerText = "oh no";
    badbutton.innerText = "Click me";
    badbutton.style.color = "white";
    playarea.removeChild(redbutton);
}
    if (badcount == 2)  {wrd.innerText = "Thas no Good";}

    if (badcount == 3)  {wrd.innerText = "Talk to me about it please";}

    if (badcount == 4)  {wrd.innerText = "I cant really do anything through here so go Talk to me please";
    playarea.removeChild(badbutton);

}
}


//else if (count == )  {wrd.innerText = "";}
//else if (newcount == )  {wrd.innerText = "";}
// else if (badcount == )  {wrd.innerText = "";}