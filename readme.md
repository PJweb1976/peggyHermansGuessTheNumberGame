Guess the number game

WincAcademy

Javascript

Exercise: Guess the number game

You will create your very first own project. You will make a game in JavaScript!

"Guess the number" - game, goes as follows:

The computer chooses a (semi)random number. The user tries to guess it.
First, read the requirements carefully. Take note of which functionalities you think you will need. In other words: which tasks should your program execute to play the game?

The game can be built in two possible ways. Choose the one that makes the most sense to you.

In a browser. If you're already familiar with adding JavaScript to a website, do this exercise in a browser. Use prompt to ask the user for input and alert to report something to the user.
In REPL.it. If your main experience is with REPL.it choose this. Use prompt to ask the user for input and console.log to report something to the user.
Requirements

These are the requirements that your project should fulfill:

As a user, I want an introductory message that greets the user and asks for their name. "Welcome! What is your name?"
As a user, I want to be able to enter my name and click enter.
As a user, after I entered my name, I want to see a message: "Hey [name]"
As a user, after the greeting with my name, I want to be asked for a new input with a digit. For example: "Enter a number between 0 and 25 to start guessing..."
As a game developer, I want the user to have a realistic chance to win, therefore I take a random number between 0 and 25. Hint: use Math.random()
As a user, I want to be able to enter and number and click enter.
As a user, I want to receive a message when I guessed the wrong number, for example: "Unfortunately, that is not correct!". Afterward, I want to be asked to guess again.
As a user, I want to receive a message when I guess the right number, for example: "Congratulations, you have won the game!". The game is now finished.
As a user, I want to receive a message when the game is done, for example: "Bye [name], see you!"
Bonus

A user gets a maximum of five tries to guess the number.
As a user, I want to see how many tries I have left after every attempt.
As a user, I want to receive a message when I have run out of tries. The game is now finished.
A user can specify the range between the random number that will be chosen.
As a user, at the start of the game, I want to be asked which is the smallest and which is the largest number to guess.
As a user, I now play with the number range that I entered at the start of the game.
Design 

There is no design available for this exercise.

=============
Tips & Tricks 
Start with making a list of To-Dos for yourself. Which functionalities are you making? Are those in separate functions? Which steps are going to be taken? Write them down.
Are you doing your exercise in the browser? Use the prompt() and alert() functions from JavaScript. For every message ask yourself, do I want the user to tell me something, or do I want to tell the user something?# peggyHermansGuessTheNumberGame
