let number = Math.floor(Math.random() * 1000);
console.log(number);

const playerName = prompt("What is your name?");

const guessNumber = prompt (playerName + " guess the number!");

if (guessNumber<number){
    prompt(":-( The number is taller :-(");
} 
else if (guessNumber>number){
    prompt(":-( The number is smaller :-( ");
}
else {
    prompt(":-) You won !!! :-)")
};
