const numbers = document.querySelectorAll(".number");
const diceImg = document.querySelector("#diceImg");
const scoreValue= document.querySelector(".scoreValue");
const reset= document.querySelector(".reset");
const rulebtn= document.querySelector(".rules");
const ruleContainer= document.querySelector("#ruleContainer");
let score = 0;
let selectedNumber = null; // store user-selected number

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
  let diceNumber = getRandomNumber(1, 6);
  diceImg.src = `https://uploads.onecompiler.io/43txguwyq/43txkvewu/dice_${diceNumber}.png`;
  console.log("Rolled:", diceNumber);

  // Check if user guessed correctly
  if (selectedNumber) {
    if (parseInt(selectedNumber) === diceNumber) {
      score += diceNumber; // Add dice number to score
      console.log("🎉 Correct! Score is now: " + score);
    } else {
      score-=diceNumber;
    }
    scoreValue.innerText=score;

    // Reset for next round
    resetGame();
  } else {
    alert("Please select a number first!");
  }
}

// Reset game state after a roll
function resetGame() {
  numbers.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("fixed");
  });
  selectedNumber = null;
}
function resetGame2() {
  scoreValue.innerText=0;
  score=0;
  numbers.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("fixed");
  });
  selectedNumber = null;
}

// When user clicks a number
numbers.forEach(number => {
  number.addEventListener("click", () => {
    selectedNumber = number.innerText;
    number.classList.add("fixed");
    console.log("Selected number is: " + selectedNumber);

    // Disable other buttons
    numbers.forEach(btn => {
      if (btn !== number) btn.disabled = true;
    });
  });
});


// Roll the dice when image is clicked
reset.addEventListener("click",resetGame2);
diceImg.addEventListener("click", rollDice);

rulebtn.addEventListener("click",()=>{
  ruleContainer.classList.toggle("hidden");
  if(ruleContainer.classList.contains("hidden")){
    rulebtn.innerText="Show Rules"
  }
  else{
    rulebtn.innerText="Hide Rules"
  }
})



