window.addEventListener('load', init);

let time = 4;
let score = 0;
let isPlaying;

// DOM elements
const wordType = document.querySelector('#word-type');
const presentWord = document.querySelector('#present-word');
const wordsDisplay = document.querySelector('#words');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// ARRAY OF WORDS
var wordss = ['clock', 'jumping', 'bottle', 'table', 'computer', 'message', 'orange', 'python', 'javascript', 'nature', 'volume',
    'calculus', 'deltoid', 'cricket', 'heart', 'sanitize', 'social', 'velocity', 'capacity', 'travel', 'keyboard', 'forest', 'number', 'rain',
    'biology', 'civil', 'property', 'value', 'website', 'technology', 'cliff', 'chain', 'multiple', 'cautious', 'generous', 'sequence', 'force',
    'complex', 'displacement', 'logic', 'programming', 'interface', 'schedule', 'equation', 'expression', 'scope', 'parallel', 'aluminium',
    'procedures', 'extra', 'interview', 'process', 'integrate', 'function', 'modern', 'culture', 'implement', 'series', 'lemon', 'distance',
    'nostalgic', 'guilty', 'grammar', 'developer', 'glass', 'software', 'designer', 'tough', 'achieve', 'container', 'empty', 'elevation',
    'angle', 'depression', 'bearing', 'south', 'generate', 'stubborn', 'master', 'establish', 'cousin', 'algebra'];



// Initialize
function init() {
    // Load word from array on screen
    showWords(wordss);
    // Begin matching on word input
    wordType.addEventListener('input', startMatch);
}

// Begin Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 5;
        showWord(wordArray);
        wordType.value = '';
        words++;
    }

    if(words === -1){
        wordsDisplay.innerHTML = 0;
    } else {
        wordsDisplay.innerHTML = words;
    }
}

// For matching the word given 
function matchWords(){
    if(wordType.value === presentWord.innerHTML) {
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Choose and show a random word
function showWord(wordss) {
    // Generate random array index
    randIndex = wordss[(Math.floor(Math.random(wordss) * wordss.length))];
    // Output a random word from the array
    presentWord.innerHTML = wordss[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    // Display time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over, You Lost !!!';
        words = -1;
    }
}