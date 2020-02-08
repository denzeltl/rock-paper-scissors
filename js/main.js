const menu = document.querySelector(".menu");
const menuStart = document.querySelector(".menu button");
const playerScoreboard = document.querySelector(".scoreboard-player p span");
const computerScoreboard = document.querySelector(".scoreboard-computer p span");
let playerScore = 0;
let computerScore = 0;
const playerHand = document.querySelector(".hands-player img");
const computerHand = document.querySelector(".hands-computer img");
const choices = document.querySelectorAll(".choices div");
let functionRunning = false;

// Open and close menu
function toggleMenu() {
    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = "0";
    computerScoreboard.textContent = "0";
    playerHand.src = `/img/rock.png`;
    playerHand.style.transform = "scaleX(-1)";
    computerHand.src = `/img/rock.png`;
    computerHand.style.transform = "scaleX(1)";
    functionRunning = false;
    choices.forEach(choice => {
        choice.classList.remove("disable-button");
    });
    menu.classList.add("offset-menu");
}

// Compare hands
function compareHands(choice) {
    functionRunning = true;
    const playerChoice = choice.dataset.choice;
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    playerHand.src = `/img/rock.png`;
    computerHand.src = `/img/rock.png`;
    choices.forEach(choice => {
        choice.classList.add("disable-button");
    });
    animateHands(playerChoice, computerChoice);
}

// Animate and show hands
function animateHands(player, computer) {
    playerHand.style.animation = "shakeP 0.8s";
    computerHand.style.animation = "shakeC 0.8s";
    setTimeout(function() {
        compareHandsConditions(player, computer);
    }, 800);
}

// Show player hand
function showPlayerHand(choice) {
    playerHand.addEventListener("animationend", () => {
        playerHand.style.animation = "";
        if (choice === "rock") {
            playerHand.style.transform = "scaleX(-1)";
            playerHand.src = `/img/${choice}.png`;
        } else {
            playerHand.style.transform = "scaleX(1)";
            playerHand.src = `/img/${choice}.png`;
        }
    });
}

// Show computer hand
function showComputerHand(choice) {
    computerHand.addEventListener("animationend", () => {
        computerHand.style.animation = "";
        if (choice === "rock") {
            computerHand.style.transform = "scaleX(1)";
            computerHand.src = `/img/${choice}.png`;
        } else {
            computerHand.style.transform = "scaleX(-1)";
            computerHand.src = `/img/${choice}.png`;
        }
    });
}

// Conditions for comparing hands
function compareHandsConditions(player, computer) {
    if (player === "rock") {
        showPlayerHand(player);
        showComputerHand(computer);
        if (computer === "scissors") {
            playerScore++;
            updateScores();
            checkWinner();
            return;
        } else if (computer === "paper") {
            computerScore++;
            updateScores();
            checkWinner();
            return;
        } else {
            checkWinner();
            return;
        }
    } else if (player === "paper") {
        showPlayerHand(player);
        showComputerHand(computer);
        if (computer === "rock") {
            playerScore++;
            updateScores();
            checkWinner();
            return;
        } else if (computer === "scissors") {
            computerScore++;
            updateScores();
            checkWinner();
            return;
        } else {
            checkWinner();
            return;
        }
    } else {
        showPlayerHand(player);
        showComputerHand(computer);
        if (computer === "paper") {
            playerScore++;
            updateScores();
            checkWinner();
            return;
        } else if (computer === "rock") {
            computerScore++;
            updateScores();
            checkWinner();
            return;
        } else {
            checkWinner();
            return;
        }
    }
}

// Update scores
function updateScores() {
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}

// Check if someone won
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        setTimeout(() => {
            const h1 = document.querySelector(".menu h1");
            const p = document.querySelector(".menu p");
            const button = document.querySelector(".menu button");

            if (playerScore === 5) {
                h1.innerHTML = `You won!<br>Congratulations!`;
            } else {
                h1.innerHTML = `You lost!<br>Better luck next time!`;
            }

            p.innerHTML = `You got ${playerScore} points.<br>The computer got ${computerScore} points.`;
            button.textContent = "PLAY AGAIN?";
            menu.classList.remove("offset-menu");
        }, 1000);
    } else {
        functionRunning = false;
        choices.forEach(choice => {
            choice.classList.remove("disable-button");
        });
    }
}

// #### Event listeners ####
menuStart.addEventListener("click", toggleMenu);
choices.forEach(choice => {
    choice.addEventListener("click", function() {
        if (functionRunning) {
            return;
        } else {
            compareHands(this);
        }
    });
});
