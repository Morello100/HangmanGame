
const words = [
    `guitar`,
    `pidor`,
    `book`,
    `nigger`,
    `balloon`,
    `letter`,
    `laptop`,
    `keyboard`,
    `frog`,
    `summer`,
    `meat`
];

const word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i += 1) {
    answerArray[i] = `_ `;
}

let remainingLetters = word.length;
let guessedLetters = [];

while (remainingLetters > 0) {
    alert(answerArray.join(''));

    let guess = prompt(`Guess the letter or click cancel to stop playing.`);
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert(`Please enter a single letter.`);
    } else if(guessedLetters.includes(guess)){
        alert(`Ви вже вводили цю букву`);
    }else {
        guessedLetters.push(guess);
        for (let j = 0; j < word.length; j += 1) {
            if (word[j] === guess) {
                guessedLetters.push(guess);
                answerArray[j] = guess;
                remainingLetters--;            
            }
        }
    }
}

alert(answerArray.join(''));
alert(`Good job! The answer was ${word}`);