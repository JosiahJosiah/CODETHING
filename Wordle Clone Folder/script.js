const q = document.getElementById("q");

q.addEventListener("click", KeyClicked);
const body = document.getElementById("myBody");
body.addEventListener("keydown", KeyPressed);
function enterLetter(key){
    if (key == "q"){
        document.getElementById("guessrow1").innerHTML="q was clicked";
    }
    if (key == "w"){
        document.getElementById("guessrow1").innerHTML="w was clicked";
    }
    if (key == "e"){
        document.getElementById("guessrow1").innerHTML="WELL IF YOU WANT TO PRESS E, I CAN MAKE YOUR COMPUTER EXPLODE. DIE PUNY MORTAL!";
    }
}


function KeyPressed(e){
    if (e.keyCode == 81)
        {
            document.getElementById("guessrow1").innerHTML = "YOU DARE PRESS THE SACRED Q";
        }
}