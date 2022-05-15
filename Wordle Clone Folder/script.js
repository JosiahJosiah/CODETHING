const q = document.getElementById("q");
var words = []
var letterspot;
var word;
var tile;
var answerWord;
var keyboardLetter;
currentWord = ""

function getWord(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET","WORDS.txt", true);
    rawFile.onreadystatechange = function (){
        if (rawFile.readyState === 4){
            if (rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                words = allText.split("\n");
                wordValue = getRandomIntInclusive(0, words.length - 1);
                word = words[wordValue];
                answerWord = word;
                document.getElementById("answer").innerHTML = answerWord
                console.log(answerWord)
            }
        }
    }
    rawFile.send(null);
}


function getRandomIntInclusive(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random()*(max-min+1)+min);
 }



function enterLetter(key){
   if (currentWord.length < 5){
       currentWord += key
       letterspot = document.getElementById(`${guesses}-${currentWord.length}`)
       letterspot.innerHTML = key
       //document.getElementById("guessrow1").innerHTML = (`YOU DARE PRESS THE SACRED ${key}`)
   }
}
function removeLetter(){
    if (currentWord.length > 1){
        letterspot = document.getElementById(`${guesses}-${currentWord.length}`)
        letterspot.innerHTML = ""
        currentWord = currentWord.slice(0,-1)
    }
    else {
        letterspot = document.getElementById(`${guesses}-${1}`)
        letterspot.innerHTML = ""
        currentWord = ""
    }
    // finish remove letter function or else massive blizard will start
}
function checkLetters(){
    if(currentWord.length === 5) {
        if (currentWord == answerWord){
            //alert("LUCKY FOOL, DO IT AGAIN, YOU WILL NOT SURVIVE THE NEXT TIME!")
        }
        for(let i = 1; i < 6; i++){
            tile = document.getElementById(`${guesses}-${i}`);
            keyboardLetter = document.getElementById(`${currentWord[i-1]}`);
            if (answerWord.includes(currentWord[i-1])&&answerWord[i-1]===currentWord[i-1]){
                tile.classList.add("turn-green");
                keyboardLetter.style.backgroundColor = "green";
            }
        }
        guesses += 1
        currentword = ""
    }
    else {
        alert("YOU MUST BE DO THE GET OF FIVE LETTERS OR YOU WORD WILL BE OF NO MEANING")
    }
}


KeyPressed = (event) =>{
    if(event.keyCode > 64 && event.keyCode < 91 && currentWord.length < 5){
        enterLetter(event.key)
    }
    if(event.keyCode === 8){
        removeLetter()
    }
    if (event.keyCode === 13){
        checkLetters()
    }
}

var guesses = 1
addEventListener("keydown", KeyPressed);
getWord()

