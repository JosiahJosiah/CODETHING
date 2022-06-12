var guesses = 1
const q = document.getElementById("q");
var words = []
var gameOver = false
var letterspot;
var word;
var tile;
var answerWord;
var keyboardLetter;
currentWord = ""
var remarks = 
["SOS CALL THE FBI, WE HAVE A HACKER!",
"Ok wow you're smart, or maybe just lucky.",
"Excellent work, you will not be sent to the gulag.",
"YOU'RE GOING TO BRAZIL.",
"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
"Is it possible to raise someone's IQ? Because I feel like you need it pretty badly.",
"SENT THIS FOOL TO THE GULAG",
]

function getWord(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET","WORDS.txt", true);
    rawFile.onreadystatechange = function (){
        if (rawFile.readyState === 4){
            if (rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                allText = allText.toLowerCase();
                words = allText.split("\n");
                wordValue = getRandomIntInclusive(0, words.length - 1);
                word = words[wordValue];
                answerWord = word;
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
    if (gameOver === false){

   if (currentWord.length < 5){
       currentWord += key
       letterspot = document.getElementById(`${guesses}-${currentWord.length}`)
       letterspot.innerHTML = key
       //document.getElementById("guessrow1").innerHTML = (`YOU DARE PRESS THE SACRED ${key}`)
   }
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
    if (gameOver === false){


    if(currentWord.length === 5) {
        if (currentWord == answerWord){
            //alert("LUCKY FOOL, DO IT AGAIN, YOU WILL NOT SURVIVE THE NEXT TIME!")
            var msg = guesses-1;
            gameOver = true;
            setTimeout(() => {alert(remarks[msg])},1250);
        }
        for(let i = 1; i < 6; i++){
            tile = document.getElementById(`${guesses}-${i}`);
            keyboardLetter = document.getElementById(`${currentWord[i-1]}`);
            if (answerWord.includes(currentWord[i-1])&&answerWord[i-1]===currentWord[i-1]){
                tile.classList.add("turn-green");
                keyboardLetter.style.backgroundColor = "green";
            }
            else if (answerWord.includes(currentWord[i-1])&&answerWord[i-1]!=currentWord[i-1]){
                tile.classList.add("turn-yellow");
                keyboardLetter.style.backgroundColor = "yellow";
                keyboardLetter.style.color = "black";
            }
            else {
                tile.classList.add("turn-black");
                keyboardLetter.style.backgroundColor = "black";
            }
        }
        guesses += 1
        if (guesses === 7 && currentWord != answerWord){
            setTimeout(() => {alert(remarks[6]+ " " + answerWord)},1250);
        }
        currentWord = ""
    }
    else {
        alert("YOU MUST BE DO THE GET OF FIVE LETTERS OR YOU WORD WILL BE OF NO MEANING")
    }
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
        if (currentWord.length === 5){
            apiCheck(currentWord)
        }
    }
}


addEventListener("keydown", KeyPressed);
getWord()




// API API API API TEST TEST ASAP ASAP
function apiCheck(word){

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word, requestOptions)
.then(response => response.json())
.then(result => isValidWord(result))
.catch(error => console.log('error', error));
}
function isValidWord(def){
if (def.length >= 1){
    checkLetters()
}
else{
    alert("ENGLISH")
}

}

