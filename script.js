
const redbutton = document.getElementById("btn") ;
let playarea = document.getElementById("divbtn") ;
let newbutton = document.createElement("BUTTON");
let wrd = document.getElementById("text") ;
let count = 0
let newcount = 0 ;

newbutton.textContent = "No" ;
//eventlisenter
redbutton.addEventListener('click', () => onButtonClick()) ;
newbutton.addEventListener('click', () => onnewButtonClick()) ;

//redbutton

function onButtonClick() {count ++;



if (count == 1) {
    wrd.innerText = "Hey";
}

else if ( count == 4 ) {wrd.innerText = "Stop that";}

else if (count == 28)  {
playarea.appendChild(newbutton);
}


else if ( count == 43 ) { wrd.innerText = "No?";
                        newbutton.style.width = "200"; 
                        newbutton.style.height = "200";}


}
//greenbutton

function onnewButtonClick() {newcount ++;

if (newcount == 5)  {wrd.innerText = "Thank you.";}

else if (newcount == 30)  {wrd.innerText = "I think I'm gonna go...";}

else if (newcount == 33)  {wrd.innerText = "Bye.";
                            playarea.removeChild(redbutton);
                            count = 0;}

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