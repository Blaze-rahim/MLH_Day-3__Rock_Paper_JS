var user_choice = prompt("Do you choose rock, paper or scissors?");
var computer_choice = Math.random();

if (computer_choice < 0.34) {
    computer_choice = "rock";
} 
else if(computer_choice <= 0.67) {
    computer_choice = "paper";
} 
else {
    computer_choice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
}

if(choice1 === "rock") {
    
    if(choice2 === "scissors") {
        return "rock wins";
    } 
    else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } 
    else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } 
    else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}


console.log("User Choice: " + user_choice);
console.log("Computer Choice: " + computer_choice);
compare(user_choice, computer_choice);