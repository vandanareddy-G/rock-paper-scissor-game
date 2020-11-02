const getId = (e) => document.getElementById(e);
const query = (e) => document.querySelector(e);


const rules = query(".rules");
const rulesBtn = query(".rules-btn");
const overlay = query(".overlay");
const close = getId("close");
const userChoice = document.querySelectorAll('.choice-btn .choice-wrapper')
const selectSection = query(".selectSection");
const userPicked = query(".user-picked");
const computerSelect = query(".computerSelect");
const resultSection = query(".main-2");
const finish = query(".finish");
const userText = query(".user-text");
const endResult = query(".end");
const msg = query(".msg");


rulesBtn.addEventListener("click", (e) => {
  rules.style.display = "flex";
  overlay.style.display = "block";
});

close.addEventListener("click", (e) => {
  rules.style.display = "none";
  overlay.style.display = "none";
});

let score = getId("score"); 


function gameOn(e) {
  const userAlt = e.target.firstElementChild?.alt || e.target.alt;
  const userSrc = e.target.firstElementChild?.src || e.target.src;
  userPicked.parentElement.classList.add(userAlt);
  resultSection.classList.remove("fade");
  selectSection.classList.add("rotate");
  let currentScore = 3; 

  setTimeout(() => {
    selectSection.style.display = "none";
    resultSection.style.display = "flex";
    userPicked.src = userSrc;
    userPicked.alt = userAlt;
    selectSection.classList.remove("rotate");
  }, 700); 

  setTimeout(computer, 1600); 

  
  function computer() {
    let randomNumber = Math.floor(Math.random() * 3); 
    switch (randomNumber) {
      case 0:
        
        computerSelect.src = "images/icon-paper.svg";
        computerSelect.parentElement.classList.add("paper");
        computerSelect.alt = "paper";
        break;
      case 1:
        
        computerSelect.parentElement.classList.add("rock");
        computerSelect.src = "images/icon-rock.svg";
        computerSelect.alt = "rock";
        break;
      case 2:
        
        computerSelect.parentElement.classList.add("scissors");
        computerSelect.alt = "scissors";
        computerSelect.src = "images/icon-scissors.svg";
        break;
    }

    if (
      (randomNumber === 0 && userPicked.alt === "paper") ||
      (randomNumber === 1 && userPicked.alt === "rock") ||
      (randomNumber === 2 && userPicked.alt === "scissors")
    ) {
      userText.style.color = "hsl(39, 89%, 49%)"; 
    } else if (
      (randomNumber === 0 && userPicked.alt === "scissors") ||
      (randomNumber === 1 && userPicked.alt === "paper") ||
      (randomNumber === 2 && userPicked.alt === "rock")
    ) {
      currentScore++;
      score.innerHTML++;
      userText.style.color = "green"; 
    } else if (
      (randomNumber === 0 && userPicked.alt === "rock") ||
      (randomNumber === 1 && userPicked.alt === "scissors") ||
      (randomNumber === 2 && userPicked.alt === "paper")
    ) {
      currentScore--;
      score.innerHTML--;
      userText.style.color = "red"; 
    }
  }
}


let continueBtn = query(".continue");

continueBtn.addEventListener("click", (e) => {
  resultSection.classList.add("fade"); 

  setTimeout(function () {
    if (score.innerHTML < "6" && score.innerHTML >= "1") {
      
      userPicked.parentElement.classList.remove("paper", "rock", "scissors");
      computerSelect.parentElement.classList.remove(
        "paper",
        "rock",
        "scissors"
      );
      userText.style.color = "white";
      selectSection.style.display = "flex";
      resultSection.style.display = "none";
      computerSelect.src = "images/empty.png";
    } else if (score.innerHTML === "6") {
      finish.style.display = "flex";
      endResult.innerHTML = "YOU WIN!!";
      continueBtn.style.display = "none";
    } else if (score.innerHTML === "0") {
      finish.style.display = "flex";
      endResult.innerHTML = "YOU LOSE😟";
      continueBtn.style.display = "none";
    }
  }, 600);
});


userChoice.forEach((selected) =>
  selected.addEventListener("click", gameOn, false)
);


query(".replay").addEventListener("click", (e) => {
  msg.style.display = "flex";
  overlay.style.display = "block";
});


query(".reload").addEventListener("click", (e) => window.location.reload(true));