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
    menu.classList.add("offset-menu");
    startGame();
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
        functionRunning = false;
        choices.forEach(choice => {
            choice.classList.remove("disable-button");
        });
        if (computer === "scissors") {
            playerScore++;
            updateScores();
            return;
        } else if (computer === "paper") {
            computerScore++;
            updateScores();
            return;
        } else {
            return;
        }
    } else if (player === "paper") {
        showPlayerHand(player);
        showComputerHand(computer);
        functionRunning = false;
        choices.forEach(choice => {
            choice.classList.remove("disable-button");
        });
        if (computer === "rock") {
            playerScore++;
            updateScores();
            return;
        } else if (computer === "scissors") {
            computerScore++;
            updateScores();
            return;
        } else {
            return;
        }
    } else {
        showPlayerHand(player);
        showComputerHand(computer);
        functionRunning = false;
        choices.forEach(choice => {
            choice.classList.remove("disable-button");
        });
        if (computer === "paper") {
            playerScore++;
            updateScores();
            return;
        } else if (computer === "rock") {
            computerScore++;
            updateScores();
            return;
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
