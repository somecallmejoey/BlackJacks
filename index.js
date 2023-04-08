let firstCard = 3;
let secondCard = 2;
let sum = firstCard + secondCard;

let hasBlackJack = true;
let isAlive = true;
let message = "";

if (sum < 21) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "You win!";
  hasBlackJack = true;
} else {
  message = "Lol no money for u get fucked";
  isAlive = false;
}

// Cash out!
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);
