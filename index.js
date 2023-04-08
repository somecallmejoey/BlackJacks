let cards = document.getElementById("cards-el");
let btn = document.getElementById("btn-start");
let wrapper = document.getElementsByClassName("wrapper");
let sums = document.getElementById("sum-el");

let a = 0;
let b = 0;
function startGame(sum) {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You win!";
    hasBlackJack = true;
  } else {
    message = "Lol no money for u get fucked";
    isAlive = false;
  }
  console.log(message);
}

function generateTwoCards() {
  if (cards.textContent !== "") {
    a = Math.floor(Math.random() * 11) + 1;
    b = Math.floor(Math.random() * 11) + 1;

    cards.textContent += "Cards: " + a + ", ";
    cards.textContent += b;
  }
}

function addNumbers() {
  let sum = a + b;

  sums.textContent += "Total =" + " " + sum;
}

function getRidOfButton() {
  btn.remove();
}
