/**
 * 
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded page");
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
                if (choiceArray.includes(choice)) {
                    computerChoice();
                    runGame(choice);
                    gameWinner();
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
    let gameLevel = document.getElementById("level-title").innerHTML;
    console.log(gameLevel);
    if (gameLevel === "Level: 1") {
        let computer = document.getElementById("computer");
        let randomNumber = Math.floor((Math.random() * 3) + 1);
        if (randomNumber === 1) {
            computer.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
            return computerGuess = "rock";
        } else if (randomNumber === 2) {
            computer.innerHTML = `<i class="fa-solid fa-hand"></i>`;
            return computerGuess = "paper";
        } else if (randomNumber === 3) {
            computer.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
            return computerGuess = "scissors";
        }
    } else if (gameLevel === "Level: 2") {
        let computer = document.getElementById("computer");
        let randomNumber = Math.floor((Math.random() * 4) + 1);
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
        }
    } else if (gameLevel === "Level: 3") {
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
    
}
/**
 * this function rusn both the value of the users choice and the computers choice
 * and compares them together to see who will win
 */
function runGame(choice) {
    let winner = document.getElementById("winner");
    if (choice === "rock" && computerGuess === "scissors") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "rock" && computerGuess === "lizard") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "paper" && computerGuess === "rock") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "paper" && computerGuess === "spock") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "scissors" && computerGuess === "paper") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "scissors" && computerGuess === "lizard") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "lizard" && computerGuess === "paper") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "lizard" && computerGuess === "spock") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "spock" && computerGuess === "scissors") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === "spock" && computerGuess === "rock") {
        winner.innerHTML = "You win!";
        incrementUserScore();
    } else if (choice === computerGuess) {
        winner.innerHTML = "tie!"
    } else {
        winner.innerHTML = "Computer wins!";
        incrementComputerScore();
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

/**
* this function will add 1 to the users score when they win the game 
*/
function incrementUserScore() {
    let userScore = document.getElementById("user-score");
    let userNumber = parseInt(document.getElementById("user-score").innerHTML);
    userNumber += 1;
    userScore.innerHTML = userNumber;
}
/**
 * this function will add 1 to the computers score when the computer wins the match
 */
function incrementComputerScore() {
    let computerScore = document.getElementById("computer-score");
    let computerNumber = parseInt(document.getElementById("computer-score").innerHTML);
    computerNumber += 1;
    computerScore.innerHTML = computerNumber;
}

function gameWinner() {
    let userScr = parseInt(document.getElementById("user-score").innerHTML);
    let computerScr = parseInt(document.getElementById("computer-score").innerHTML);
    let winOverlay = document.getElementById("win-overlay");
    let loseOverlay = document.getElementById("lose-overlay");
    if (userScr === 3) {
        winOverlay.style.visibility = "visible";
    } else if (computerScr === 3)  {
        loseOverlay.style.visibility = "visible";
    }
}

function refreshPage(){
    window.location.reload();
} 
