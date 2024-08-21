let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    // console.log("You win.");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `You win. Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("You lose.");
    computerScore++;
    computerScorePara.innerText=computerScore;
    msg.innerText = `You lose. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawGame = () => {
  //   console.log("Game Draw.");
  msg.innerText = "Game was Draw. Play Again.";
  msg.style.backgroundColor = "#2D2D2D";
};
const getComputerChoice = () => {
  const option = ["stone", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};
const playGame = (userChoice) => {
  //   console.log(userChoice);
  const computerChoice = getComputerChoice();
  //   console.log(computerChoice);

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = computerChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
