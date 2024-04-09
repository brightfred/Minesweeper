// Path: src/guessingGame.js
// Import the readline module
const readline = require('readline');

// Create an instance of readline.Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber = getRandomNumber(1,100);

let attempts = 0;

console.log('Welcome to the guessing game!');
console.log('I have selected a number between 1 and 100.');
console.log('Try to guess the number.');


// Define a function to ask the user to guess the number

function guessNumber() {
    rl.question('Guess a number between 1 and 100: ', (answer) => {
        attempts+=1;
const guess = parseInt(answer, 10);
        // Check if the guess is correct
        if (guess === secretNumber) {
            console.log(`Congratulations! The number was ${secretNumber} .You guessed the number in ${attempts} attempts.`);
            rl.close();
        } else if (guess < secretNumber) {
            console.log('Too low. Try again.');
            guessNumber();
        } else if (guess > secretNumber) {
            console.log('Too High. Try again.');
            guessNumber();
        }
        else {
            console.log('Please enter a valid number.');
            guessNumber();
        }
    });
}

// Start the game
guessNumber();



