document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let activeStyle = "10px solid green";
    let choiceArray = ["rock", "paper", "scissors", "lizard", "spock",]
    let choice = "";
    for (let button of buttons) {

        button.addEventListener("click", function() {
            let data = this.getAttribute("data-type");
            if (this.getAttribute("data-type") === "rock") {
                console.log('rock')
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "paper") {
                console.log('paper')
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "scissors") {
                console.log('scissors')
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "lizard") {
                console.log('lizard')
                this.style.border = activeStyle;
                this.style.color = "green";
                checkActive(data);
                return choice = this.getAttribute("data-type");
            } else if (this.getAttribute("data-type") === "spock") {
                console.log('spock')
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
            }
        })
    }

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
        return computerGuess = "liazrd";
    } else if (randomNumber === 5) {
        computer.innerHTML = `<i class="fa-solid fa-hand-spock"></i>`;
        return computerGuess = "spock";
    }
    
}

function runGame(choice) {
    let winner = document.getElementById("winner");
    if (choice === "rock" && computerGuess === "scissors" || computerGuess === "lizard") {
        winner.innerHTML = "You win!";
    } else if (choice === "paper" && computerGuess === "rock" || computerGuess === "spock") {
        winner.innerHTML = "You win!";
    } else if (choice === "scissors" && computerGuess === "paper" || computerGuess === "lizard") {
        winner.innerHTML = "You win!";
    } else if (choice === "Lizard" && computerGuess === "paper" || computerGuess === "spock") {
        winner.innerHTML = "You win!";
    } else if (choice === "spock" && computerGuess === "scissors" || computerGuess === "rock") {
        winner.innerHTML = "You win!";
    } else {
        winner.innerHTML = "Computer wins!";
    }
}

function restartGame() {
    
}

