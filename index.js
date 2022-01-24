
//let guessNumber = null;//numberToBeGuessed
//let userName; //person
//let currentGuess;
//let numberOfGuesses = 5;
//let minNum = 0;
//let maxNum = 25;
//let person= prompt("Welcome! What is your name?", "Please enter your name")
//alert ("Hey " + person +"! Lets play a game!");
//alert ("You have 5 tries")
let msg1 = document.getElementById("message1")
let msg2 = document.getElementById("message2")
let msg3 = document.getElementById("message3")

let randomNum = Math.floor(Math.random() * 25) +1;
console.log(randomNum);
let noOfGuesses = 0;
let guessedNumbers = [];

//function getVal() {
  //const val = document.querySelector('input').value;
  //console.log(val);
//}
//function play(){
  let guess = document.getElementsByClassName("guess").value;
if(userGuess < 1 || userGuess > 25) {
  document.write("Please enter a number between 1 and 25");
}
else{
  guessedNumbers.push(userGuess);
  noOfGuesses+= 1;
}

 /* 
// declare a variable
let guess;
guess = document.write("Please enter a number between 0 and 25")

if (guess < randomNum) {
  document.write("Your guess is to low");
} else if (guess > randomNum) {
 document.write("Your guess is to high");
} else if (guess == randomNum){
  document.write("You guessed it. You win!");
} else {
  document.write("Sorry error");
}*/
