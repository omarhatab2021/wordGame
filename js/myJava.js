const letters = "abcdefghijklmnopqrstuvwxyz";
//create array from letters
let arratLetters = Array.from(letters);
console.log(arratLetters);

//select letters container
let containerLetters = document.querySelector('.letters');

//generate letters
arratLetters.forEach(letter => {
     let $span = document.createElement('span');

     //create text node for span
     let spanText = document.createTextNode(letter);

     //add spanText to $span
     $span.appendChild(spanText);

     //add class to span
     $span.className = "letter-box";

     //add $span to containerLetters
     containerLetters.appendChild($span);

})

//generate words object
const words = {
     programing: ['php' , 'javascript' , 'scala' , 'go' , 'fortran' , 'r' , 'mysql' , 'phaython'] ,
     movies: ['prestige' , 'insception' , 'parasite' , 'intersteller' , 'wheplash' , 'memnoto' , 'coco' , 'up'],
     people: ['shikabala' , 'obama' , 'sharqi' , 'zizo' , 'wensh' , 'hamed' , 'ftoh' , 'shafi' , 'onajum'],
     countries: ['egypt' , 'syria' , 'palastine' , 'yemen' , 'bahrin' , 'qater'] 

}

document.querySelector('button').onclick = function() {
     location.reload();
}



//random property
let allKeys = Object.keys(words);

//random number for allKeys property
randomNumProp = Math.floor(Math.random() * allKeys.length)

//property of game
propGame = allKeys[randomNumProp];
//words array 
let wordsArray = words[allKeys[randomNumProp]];
//random number for words
randomWord = Math.floor(Math.random() * wordsArray.length )

//word of game
wordGame = wordsArray[randomWord];
console.log(propGame);
console.log(wordGame);

//write a catogaries of game
document.querySelector('.catogaries span').innerHTML = propGame;

//create letters-guess container
let lettersGuessContainer = document.querySelector('.letters-guess');

//convert word-game to array
let wordGameArray = Array.from(wordGame);

wordGameArray.forEach(word => {
     //create new span
     let wordSpan = document.createElement('span');
     
     //if word is space
     if(word === " ") {
          wordSpan.className = 'emptyWord';
     }
     else {
               //set class to wordSpan
     wordSpan.setAttribute('class' , 'word-span');
     }

     //append wordSpan to letterGuessContainer
     lettersGuessContainer.appendChild(wordSpan);



})

     //generate wordSpanArray 
wordSpanArray = Array.from(lettersGuessContainer.children);

//generate attempGAme 
let attempGame = 0;
let successed = 0;
//after letter-box clicked
document.addEventListener('click' , function(e) {
     
     //if letter-box
     if(e.target.classList.contains('letter-box')) {
          e.target.classList.add('clicked');
          e.target.parentNode.classList.add('no-clicking');
          setTimeout(() => {
               e.target.parentNode.classList.remove('no-clicking');
          } , 2000);
          //choose the status
          let theStatus = false;

          //store the letter in stach
          let letterStore = e.target.innerHTML.toLowerCase();
          

          //checked if letterStore equal to any letter in wordGame
          wordGameArray.forEach((wordLetter , wordIndex) => {
               if(letterStore === wordLetter) {

                    //change the status
                    theStatus = true;
                    successed++;
                    wordSpanArray[wordIndex].innerHTML = letterStore;
               }
          })

          if(theStatus !== true) {
               //increase attempGame by one
               attempGame++;
               document.querySelector('.hangman-draw').classList.add(`wrog-${attempGame}`);
               //play sound failed
               document.getElementById('failed').play();
               //if hangman has class wrog-8
               gameOver() ;
               
          }
          else {
               document.getElementById('success').play();
               successful();
          }
          

     }
})

//function game over 
function gameOver() {
     setTimeout(() => {
          if(document.querySelector('.hangman-draw').classList.contains('wrog-8')) {
               document.querySelector('.letters').classList.add('no-clicking');

               //splash-screen
               document.querySelector('.splash-screen').classList.add('flexed');
          }
     } , 500);
     
}


function successful() {
     setTimeout(() => {
          if(successed == wordGame.length) {
               document.querySelector('.splash-screen span').innerHTML = "THANKS";
               document.querySelector('.splash-screen').classList.add('flexed')
          }
     } , 1000);

}

