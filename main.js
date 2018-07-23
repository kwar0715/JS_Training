// random math number here for guess
var guessNumber ;

// how many guesses
var guessCount = 10;

// public variables
var txtinput = document.querySelector('.guessField')
var guessSubmit = document.querySelector('.guessSubmit');

var prev = document.querySelector('.guesses');
var last = document.querySelector('.lastResult');
var lh = document.querySelector('.lowOrHi');

var startNew = document.querySelector('button');

// event listners
guessSubmit.addEventListener('click',compareNumber);
startNew.addEventListener('click',startNewGame);

// load the form 
startNewGame();

// function area
function compareNumber(){

    // check is it a valid

    if(isNaN(txtinput.value) || txtinput.value<1 || txtinput.value>100){
        alert("Enter Correct Value");
        txtinput.value ="";
        txtinput.focus();
        return;
    }

    // guesses are over
    if(guessCount==0)
        gotoStart();
        

    // update guess count
    guessCount--;

    // show previous items
    if(prev.textContent == '')
        prev.textContent = "Previous guesses: ";
    prev.textContent += txtinput.value + " ";

    // is high value entered
    if(guessNumber<txtinput.value){
        last.textContent = "Wrong !";
        last.style.backgroundColor ="Red";
        lh.textContent = "Last guess was too high!"
    }

    // is low value entered
    if(guessNumber>txtinput.value){
        last.textContent = "Wrong !";
        last.style.backgroundColor ="Red";
        lh.textContent = "Last guess was too Low!"
    }

    // is equal value entered
    if(guessNumber == txtinput.value){
        last.textContent = "Congratulations! You got it right!";
        last.style.backgroundColor ="Green";
        lh.textContent = ""

        // start new game
        gotoStart();
    }
    txtinput.value ="";
    txtinput.focus();
}

// the start position 
function gotoStart(){
    guessSubmit.disabled = true;
    txtinput.disabled = true;
    startNew.style.display = 'block';
}

function startNewGame(){
    guessNumber=  Math.floor(Math.random() * 100) + 1;
    
    // set all as before
    last.textContent = "";
    last.style.backgroundColor ="White";
    lh.textContent = "";
    prev.textContent="";

    // counts
    guessCount = 10;

    // enable and desable items
    guessSubmit.disabled = false;
    txtinput.disabled = false;
    startNew.style.display = 'none';
}