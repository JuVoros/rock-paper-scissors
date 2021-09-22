// Player Choice 
 var userChoice = prompt("Pick your choice! r (rock) p (paper), or s (scissors)?");
 console.log(userChoice);

//  Computer Choice
var computerChoiceArray = ["r", "p", "s"];
var randomElement = Math.floor(Math.random()*computerChoiceArray.length);
var randomPick = computerChoiceArray[randomElement];

console.log(randomElement);
console.log(randomPick);

alert("Computer Picked " + randomPick + "!")

// If Else Statements

var userScore = 0;
var computerScore = 0;

function userWins(x,y) {
    if (userChoice === "r" && randomPick === "s") {
        alert("You Win!");
        userScore++;
        return;
    }else if (userChoice === "s" && randomPick === "p") {
        alert("You Win!");
        userScore++;
        return;
    }
}

function computerWins(x,y) {
    if (userChoice === "r" && randomPick === "p") {
        alert("You Lose");
        computerScore++;
         return;   
     }else if (userChoice === "s" && randomPick === "r") {
         alert("You Lose");
         computerScore++;
         return;
     } else if (userChoice === "p" && randomPick === "s") {
     }
}

if (userChoice === randomPick) {
    alert("Tie!")
} else if (userWins()) {
    console.log(userScore);
} else if (computerWins()) {
    console.log(computerScore);
}

