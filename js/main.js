const menu = document.querySelector(".menu");
const menuStart = document.querySelector(".menu button");
const playerScoreboard = document.querySelector(".scoreboard-player p span");
const computerScoreboard = document.querySelector(".scoreboard-computer p span");
let playerScore = 0;
let computerScore = 0;
const playerHand = document.querySelector(".hands-player img");
const computerHand = document.querySelector(".hands-computer img");
const choices = document.querySelectorAll(".choices div");

// #### Functions ####
// Open and close menu
function toggleMenu() {
    menu.classList.add("offset-menu");
    startGame();
}

// Compare hands
function compareHands(choice) {
    const playerChoice = choice.dataset.choice;
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    showHands(playerChoice, computerChoice);
    compareHandsConditions(playerChoice, computerChoice);
}

// Animate and show hands
function showHands(player, computer) {}

// Conditions for comparing hands
function compareHandsConditions(player, computer) {
    if (player === "rock") {
        if (computer === "scissors") {
            playerScore++;
            updateScores();
        } else if (computer === "paper") {
            computerScore++;
            updateScores();
        } else {
            return;
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            playerScore++;
            updateScores();
        } else if (computer === "scissors") {
            computerScore++;
            updateScores();
        } else {
            return;
        }
    } else {
        if (computer === "paper") {
            playerScore++;
            updateScores();
        } else if (computer === "rock") {
            computerScore++;
            updateScores();
        } else {
            return;
        }
    }
}

// Update scores
function updateScores() {
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}

// Start game
function startGame() {}

// #### Event listeners ####
menuStart.addEventListener("click", toggleMenu);
choices.forEach(choice => {
    choice.addEventListener("click", function() {
        compareHands(this);
    });
});
