var heading;
heading = document.getElementById('colorValue');
var buttons;
buttons = document.getElementsByClassName('colorButton');
var background;
background = document.getElementById("game");
var resetbutton;
resetbutton = document.getElementById('resetButton');
// initialize gameOver variable, initially set to false
var gameOver = false;
//initialize variable CHANCES to have number of guesses
var CHANCES = 5;
var isReset = false;

function setButtonColor(button, red, green, blue){
  button.setAttribute('style', 
        'background-color: rgb(' + red + ',' + green + ',' + blue + ');');
}

function makeColorValue(){
  return Math.round(Math.random() * 255);
}

function startGame(){
  //
background.setAttribute("style", 'background-color: royalblue;');
//make 3 random color vals
CHANCES = 5;
gameOver = false;
var buttonred = makeColorValue();
while (buttonred < 50){
  buttonred = makeColorValue();
}
var buttongreen = makeColorValue();
while (buttongreen < 50){
  buttongreen = makeColorValue();
}
var buttonblue = makeColorValue();
while (buttonblue < 50){
  buttonblue = makeColorValue();
}
//setButtonColor on resetbutton
setButtonColor(resetbutton,buttonred, buttongreen, buttonblue);
var answerButton = Math.round(Math.random()*(buttons.length-1)); 
var answerMessage = document.getElementById("answer");
  answerMessage.innerHTML = "choose a color"
  for (var i = 0; i < buttons.length; i++){
    var red = makeColorValue();
    var green = makeColorValue();
    var blue = makeColorValue();
    setButtonColor(buttons[i],red, green, blue);
    if (i === answerButton){
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
    /* buttons[i].addEventListener('click', function(){
      if (this === buttons[answerButton]){
        answerMessage.innerHTML = "Correct!";
      }
      else{
        answerMessage.innerHTML = "incorrect :(";
      }
    });
    /* add event listener */
    if (isReset===false){
    buttons[i].addEventListener('click',function(){
      // check if gameOver is false
      if (gameOver === false){
        if (this === buttons[answerButton]){
          answerMessage.innerHTML = "Correct!";
//  background.setAttribute('style', 'background-color: green;');
          //reassign background color ->
          background.setAttribute("style", 'background-color: green;')
          alert("YOU HAVE BEATEN THE ULTIMATE GAME, YOU ARE NOW WORTHY TO EAT THE GOLDEN SHOE.")
      }
        else{
          answerMessage.innerHTML = "WRONG WRONG WRONG";
          //reassign background color ->
          background.setAttribute("style", 'background-color: red;')
          CHANCES -= 1
        // check if chances is less than 1, and if it is
        // then assign gameOver to true
          if (CHANCES < 1){
            gameOver = true;
            alert("PRESS RESET GAME WHEN YOUR PRIDE HAS RETURNED");
        }
      }    
      }
      // else, alert the same message
      else{
        alert("PRESS RESET GAME WHEN YOUR PRIDE HAS RETURNED");
      }
        
      
    });
  
    }
        
  }
  if (i === buttons.length){
    isReset = true;
  }
} 


startGame();
/* 
document.getElementById('resetButton').addEventListener('click', startGame) 
*/

document.getElementById('resetButton').addEventListener('click',startGame)