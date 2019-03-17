//pseudocode for hangman game

// 1. create an array that contains the words
// 2. choose a word at random from the array usign Math.random()
// 3. display the number of words the computer has chosen on the screen somehow
// 4. then have user enter letters to match the words in the letter using some method that checks whether user entered letter is part of the word

// define words array

$(document).ready(function() {
  var words, chosen, chosenLength, chosenArray, userGuess, alreadyGuess, tries;

  // define words array
  words = [
    'cup',
    'tea',
    'coffee',
    'succulent',
    'chair',
    'steak',
    'javascript',
    'saucer',
    'carrier',
    'envelope',
    'computer',
    'desktop',
    'vacuum',
    'cloth',
    'pillow',
    'bed',
    'calculator'
  ];

  // let computer choose one word:

  chosen = words[Math.floor(Math.random() * words.length)];
  console.log(chosen);

  // find string length:

  chosenLength = chosen.length;
  chosenArray = [];

  //generate as many 'dashes' as the length of the string:

  for (var i = 0; i < chosenLength; i++) {
    chosenArray[i] = '_ ';
  }
  // ['_','_','_']

  //add keyup event listener

  document.addEventListener('keyup', function(e) {
    // save the user entered guess to a variable
    userGuess = e.key;

    // Pseudocode:
    // 1. go through the computer chosen word
    // 2. While going through the word, if any letter matches the user entered guess, then:
    // 3. then save that user guess inside the same index of the empty 'dashed' array where the letter is in the original computer chosen word
    for (var j = 0; j < chosenLength; j++) {
      if (chosen[j] === userGuess) {
        chosenArray[j] = userGuess;
        //alert(chosenArray.join(' '));
      }
    }
    console.log(chosenArray);
  });
});
