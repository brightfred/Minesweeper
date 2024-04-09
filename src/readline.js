// Import the readline module
const readline = require('readline');

// Create an instance of readline.Interface
const rl = readline.Interface({
    // Input and output streams are set to process.stdin and process.stdout
    input: process.stdin,
    output: process.stdout
});

// Use the rl.question() method to ask the user a question
rl.question('What is your name? ', (name) => {
    // Use the name provided by the user
    console.log(`Hello, ${name}!`);
    // Close the readline.Interface
    rl.close();
});



// now i want to create a guessing game using readline module in nodejs to guess a number between 1 and 100

// Path: src/guessingGame.js
// Import the readline module
const readline = require('readline');

// Create an instance of readline.Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;

// Define a function to ask the user to guess the number

function askGuess() {
    rl.question('Guess a number between 1 and 100: ', (guess) => {
        // Convert the guess to a number
        guess = parseInt(guess, 10);

        // Check if the guess is correct
        if (guess === number) {
            console.log('Congratulations! You guessed the number.');
            rl.close();
        } else if (guess < number) {
            console.log('Too low. Try again.');
            askGuess();
        } else {
            console.log('Too high. Try again.');
            askGuess();
        }
    });
}

// Start the game
askGuess();

// Listen for the close event
rl.on('close', () => {
    console.log('Goodbye!');
});

