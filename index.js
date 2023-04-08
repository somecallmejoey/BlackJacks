let firstCard = 3;
let secondCard = 2;
let sum = firstCard + secondCard;

let hasBlackJack = true;

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("You win!");
  hasBlackJack = true;
} else {
  console.log("Lol no money for u get fucked");
}

// Cash out!
console.log(hasBlackJack);
