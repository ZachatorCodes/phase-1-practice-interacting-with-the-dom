// creating variables from page elements
const counter = document.querySelector("#counter");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const heartButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
const submitButton = document.querySelector("#submit");
const commentList = document.querySelector("#list")
const commentInput = document.querySelector("#comment-input");
const likeList = document.querySelector(".likes");

// set interval functions and event listeners
let timerIntervalID = setInterval(increaseTimerEverySecond, 1000);
minusButton.addEventListener("click", removeOneFromTimer);
plusButton.addEventListener("click", addOneToTimer);
pauseButton.addEventListener("click", pauseResumeTimer);
submitButton.addEventListener("click", addComment);
heartButton.addEventListener("click", manageLike);

function manageLike() {
    const counterNum = counter.textContent;
    const likes = document.querySelector(".likes");
    const arrLikes = [...likes.children];
    const elementLi = arrLikes.find(item => {
        if (item.id === counterNum) {
            return item.id;
        }
        else {
            return null;
        }
    })
    if (elementLi) {
        let spanLi = document.getElementById(`s${counterNum}`);
        elementLi.innerHTML = `${counterNum} has been liked <span id=s${counterNum}>${++spanLi.innerText}</span> times`;
    }
    else {
       let li = document.createElement("li");
       li.innerHTML = `${counterNum} has been liked <span id=s${counterNum}>1</span> time`;
       li.id = counterNum;
       likes.appendChild(li);
    }
}

// disables all buttons except for play/pause
function disableButtons() {
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    submitButton.disabled = true;
}

// enables all buttons except for play/pause
function enableButtons() {
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    submitButton.disabled = false;
}

// pauses and plays the timer depending on button text. updates text accordingly
function pauseResumeTimer() {
    if (pauseButton.textContent === " pause ") {
        if (timerIntervalID) {
            clearInterval(timerIntervalID);
            timerIntervalID = null;
            pauseButton.textContent = " resume ";
            disableButtons();
        }
    }
    else if (pauseButton.textContent === " resume ") {
        if (!timerIntervalID) {
            timerIntervalID = setInterval(increaseTimerEverySecond, 1000);
            pauseButton.textContent = " pause ";
            enableButtons();
        }
    }
}

// creates a new comment and adds it to the DOM
function addComment(event) {
    event.preventDefault();
    const newComment = document.createElement("p");
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
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
    if (counterValue <= 0) {
        counterValue = 0;
    }
    counter.textContent = counterValue;
}

// when called adds one to timer
function addOneToTimer() {
    let counterValue = parseInt(counter.textContent);
    counterValue += 1;
    counter.textContent = counterValue;
}

