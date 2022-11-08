// creating variables from page elements
const counter = document.querySelector("#counter");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const heartButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
const submitButton = document.querySelector("#submit");
const commentList = document.querySelector("#list")

// set interval functions and event listeners
const timerIntervalID = setInterval(increaseTimerEverySecond, 1000);
minusButton.addEventListener("click", removeOneFromTimer);
plusButton.addEventListener("click", addOneToTimer);
pauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
    clearInterval(timerIntervalID);
}

// increases timer every second
function increaseTimerEverySecond() {
    let counterValue = parseInt(counter.textContent);
    counterValue += 1;
    counter.textContent = counterValue;
}

// when called removes one from timer
function removeOneFromTimer() {
    let counterValue = parseInt(counter.textContent);
    counterValue -= 1;
    counter.textContent = counterValue;
}

// when called adds one to timer
function addOneToTimer() {
    let counterValue = parseInt(counter.textContent);
    counterValue += 1;
    counter.textContent = counterValue;
}

