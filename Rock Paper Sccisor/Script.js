//This is the value of scores
let userScore = 0;
let compScore = 0;

//excess the Choices and the massage container
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//Excess the score-board
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Genration of Random choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function run when game is draw
const drawGame = () => {
  msg.innerText = "Game was Draw, Play again.";
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "#f7dba7";
};

// function for display the winner on msg
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you Won! Your ${userChoice} beats Comp ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "White";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose! comp ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

// Function that play the Actual game
const playgame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userwin = compChoice === "Scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

// For each loop for excess the single choice(["rock", "paper", "Scissors"])
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
