let Boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");

  Boxes.forEach((Box) => {
    Box.classList.remove("o-color", "x-color");
  });
};

Boxes.forEach((Box) => {
  Box.addEventListener("click", () => {
    if (turnO) {
      Box.innerText = "O";
      Box.classList.add("o-color");
      turnO = false;
    } else {
      Box.innerText = "X";
      Box.classList.add("x-color");
      turnO = true;
    }
    Box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of Boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of Boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `congratulations, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = Boxes[patterns[0]].innerText;
    let pos2Val = Boxes[patterns[1]].innerText;
    let pos3Val = Boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

// Boxes.forEach(Box => {
//    Box.addEventListener("click", ()=>{
//     if (turnO) {
//         Box.innerText = "O"
//         Box.classList.add(".O-color")
//         turnO = false;
//     } else {
//         Box.innerText = "X"
//         Box.classList.add(".x-color")
//         turnO = true;
//     }
//     Box.disabled = true;
//     checkWinner();
//    })
// });

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
