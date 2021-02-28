const dice = [
  "&#9856:1",
  "&#9857:2",
  "&#9858:3",
  "&#9859:4",
  "&#9860:5",
  "&#9861:6",
];

//selectors

const numInput = document.querySelector("#dice-input"); //this is out number input
const diceOutput = document.querySelector("#dice-para"); //this is our dice output sum output

const diceButton = document.querySelector("#roll-dice-btn"); //button to submit

const h2 = document.querySelector("#sum-para"); //this prints history to screen
const ul = document.querySelector("ul");

const p = document.querySelector("#display-image");
let original = "Number of dice:";
//let count = 0; //or 0?
let diceList = ""; //number of times dice is rolled
let sumOfInput = ""; // hold inputs from numinput
let listItem; //to hold li
let currentValue = 0; //counter
let num;
let total;
let sum;

//Functions

//get dice to print
const getDice = (event) => {
  event.preventDefault();

  //pick the amount  needed numinPut.value * , also need a loop
  for (let i = 0; i < Number(numInput.value); i++) {
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    let total = randomRoll + numInput;
    //get dice and store in diceList variable
    diceList += randomRoll;

    //display dice and reset input area

    diceOutput.textContent = `Number of dice: ${diceList}`;
    //numInput.value = "";
  }
};
diceButton.addEventListener("click", getDice);

//add history
const diceHistory = (event) => {
  event.preventDefault();
  let newArray = numInput.value.split("\n"); //numinput is the accumulater,b is the current value
  newArray.map((el) => {
    listItem = document.createElement("li");
    listItem.textContent = el;
    ul.appendChild(listItem);
    //create li for each dice history
    listItem.textContent = `${diceList}= ${total}`; //dicelist (dices) and number total
    //diceList = "";

    diceOutput = "History";
    numInput.value = "";
    //count++;
  });
};

diceButton.addEventListener("click", diceHistory);

//adds the sum printed when inputs are added
const sumOfOutput = (event) => {
  event.preventDefault();
  let currentValue = numInput.value + diceList;
  let sumPrinted = numInput.value + currentValue; // accumlator = numinput , currentvalue to be added to accumlator
  sum += sumPrinted;
  total++;
  if (total < 0) {
    h2.textContent = numInput + sum + total;
  } else {
    h2.textContent = "";
  }
};

diceButton.addEventListener("click", sumOfOutput);
