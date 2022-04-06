document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let activeStyle = "10px solid green";
    let choiceArray = ["rock", "paper", "scissors", "lizard", "spock",]
    let choice = "";
    for (let button of buttons) {

        button.addEventListener("click", function() {
            let data = this.getAttribute("data-type");
            if (this.getAttribute("data-type") === "rock") {
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "paper") {
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "scissors") {
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "lizard") {
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "spock") {
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "submit") {
                console.log("current choice is " + choice)
                if (choiceArray.includes(choice)) {
                    computerChoice();
                    runGame(choice);
                } else {
                    alert("please choose a valid option!");
                }
            } else if (this.getAttribute("data-type") === "continue") {
                let submitBtn = document.getElementById("submit-button");
                let continueBtn = document.getElementById("continue-button");
                let computer = document.getElementById("computer");
                let winner = document.getElementById("winner");
                let buttons = document.getElementsByTagName("button");
                for (let button of buttons) {
                    if (button.style.border = "10px solid green") {
                    button.style.border = "none";
                    button.style.color = "black";
                    }
                }
                computer.innerHTML = `<i class="fa-solid fa-question"></i>`;
                winner.innerHTML = "-";
                continueBtn.style.display = "none";
                submitBtn.style.display = "inline";
                return choice = "";
            }
        })
    }
    /**
     * This function loops through all the buttons to check which one is active and remove any styles added
     * from the ones that arnt active to show it is not active 
     */
    function checkActive(data) {
        let buttons = document.getElementsByTagName("button");
            for (let button of buttons) {
                if (button.style.border = "10px solid green" && data === button.getAttribute("data-type")) {
            } else {
                button.style.border = "none";
                button.style.color = "black";
            }
        }
    }
})
/**
 * this function generates a random number between 1-5 and assings it a value
 * from rock paper scissors lizard spock which will then be the computers guess
 * 
 */
function computerChoice() {
    let computer = document.getElementById("computer");
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    if (randomNumber === 1) {
        computer.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
        return computerGuess = "rock";
    } else if (randomNumber === 2) {
        computer.innerHTML = `<i class="fa-solid fa-hand"></i>`;
        return computerGuess = "paper";
    } else if (randomNumber === 3) {
        computer.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
        return computerGuess = "scissors";
    } else if (randomNumber === 4) {
        computer.innerHTML = `<i class="fa-solid fa-hand-lizard"></i>`;
        return computerGuess = "lizard";
    } else if (randomNumber === 5) {
        computer.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        return computerGuess = "spock";
    }
    
}
/**
 * this function rusn both the value of the users choice and the computers choice
 * and compares them together to see who will win
 */
function runGame(choice) {
    let winner = document.getElementById("winner");
    if (choice === "rock" && computerGuess === "scissors") {
        winner.innerHTML = "You win!";
    } else if (choice === "rock" && computerGuess === "lizard") {
        winner.innerHTML = "You win!";
    } else if (choice === "paper" && computerGuess === "rock") {
        winner.innerHTML = "You win!";
    } else if (choice === "paper" && computerGuess === "spock") {
        winner.innerHTML = "You win!";
    } else if (choice === "scissors" && computerGuess === "paper") {
        winner.innerHTML = "You win!";
    } else if (choice === "scissors" && computerGuess === "lizard") {
        winner.innerHTML = "You win!";
    } else if (choice === "lizard" && computerGuess === "paper") {
        winner.innerHTML = "You win!";
    } else if (choice === "lizard" && computerGuess === "spock") {
        winner.innerHTML = "You win!";
    } else if (choice === "spock" && computerGuess === "scissors") {
        winner.innerHTML = "You win!";
    } else if (choice === "spock" && computerGuess === "rock") {
        winner.innerHTML = "You win!";
    } else if (choice === computerGuess) {
        winner.innerHTML = "tie!"
    } else {
        winner.innerHTML = "Computer wins!";
    }
    restartGame(); 
}

/**
 * this function will replace the submit button with a continue button so the player 
 * can play the game again
 */
function restartGame() {
    let submitBtn = document.getElementById("submit-button");
    let continueBtn = document.getElementById("continue-button");
    continueBtn.style.display = "inline";
    submitBtn.style.display = "none";
}

