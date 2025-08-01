let keyPressedColor = '#7E7F83';
let keyBaseColor = '#000000';

let accentPressedColor = '#CC2500';
let accentBaseColor = '#FF2E00';

let specialKeysPressed = '#003052';
let specialKeysBase = '#00538F';

const modernSpace = document.getElementById("modernSpace");

const highScoreElement = document.getElementById("highScore");
const currentScoreElement = document.getElementById("currentScore");
const failureMessage = document.getElementById("failure-message");

let currentStyleSheet;

let highScore = 0;
let points = 0;
let gameOver = false;

let matchInterval = 0;
let matchString = document.getElementById("match-string");
let matchStringSolution = document.getElementById("match-string-solution");

const arrowValues = [{key:"ArrowDown", imageUrl: "Direction=Down.svg"},{key:"ArrowUp", imageUrl: "Direction=Up.svg"},{key:"ArrowLeft", imageUrl: "Direction=Left.svg"},{key:"ArrowRight", imageUrl: "Direction=Right.svg"}];
let sequenceOrder = [];
let solution = [];

function getRandomSequence(difficulty) {
    for (let i = 0; i < difficulty; i++) {
        let newImage = document.createElement('img');
        let direction = arrowValues[(Math.floor(Math.random() * arrowValues.length))];
        newImage.src = direction.imageUrl;
        newImage.alt = direction.key;
        newImage.className = "sequenceArrow";
        sequenceOrder[i] = newImage; 
        matchString.append(sequenceOrder[i]);
    }
}

function checkString(key, interval) {
    let nextLetter = document.createElement('img');
    nextLetter.src = arrowValues.find(direction => direction.key == key).imageUrl;
    nextLetter.className = "sequenceArrow";
    console.log(interval);
    if (key == sequenceOrder[interval].alt && !gameOver) {
        nextLetter.classList.add("correct");
        matchStringSolution.appendChild(nextLetter);
        solution[interval] = nextLetter;
        matchInterval++;

        if(solution.length == sequenceOrder.length){
            console.log("here");
            checkSolution();
        }
        console.log(gameOver + "success");
        return true;
    }
    else {
        nextLetter.classList.add("wrong");
        matchStringSolution.appendChild(nextLetter);
        solution[interval] = nextLetter;
        console.log(gameOver + "fail");
        return false;
    }

}

function checkSolution() {
    if (!gameOver) {
        if (points >= highScore) {
            points++;
            highScore++;
        } else { points++; }
        matchString.innerHTML = '';
        matchInterval = 0;
        getRandomSequence(5);
        highScoreElement.innerHTML = highScore;
        currentScoreElement.innerHTML = points;
    } else {
        matchString.innerHTML = '';
        points = 0; 
        currentScoreElement.innerHTML = points;
    }
    solution = [];
    matchStringSolution.innerHTML = '';
}

function resetGame(){
    points = 0;
    currentScoreElement.innerHTML = points;
    gameOver = false;
    matchInterval = 0;
    matchString.innerHTML = "";
    matchStringSolution.innerHTML = "";
    sequenceOrder = [];
    solution = [];
    failureMessage.style.visibility = "hidden";
    getRandomSequence(5);
}

function keyDownHandler(e) {   
    let charPressed = '';
    if(isMobile()){
        charPressed = e.target.id;
    } else {
        charPressed = e.key; 
    }

    if (charPressed == "ArrowUp" || charPressed == "ArrowLeft" || charPressed == "ArrowDown" || charPressed == "ArrowUp" || charPressed == "ArrowRight") {
        document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = accentPressedColor;
        if(!checkString(charPressed, matchInterval)){
            gameOver = true;
            failureMessage.style.visibility = "visible";  
        }else{

        }
    } else if(charPressed == " " && gameOver){
        resetGame();
    }
    }

function keyUpHandler(e) {
    let charPressed = '';
    if(isMobile()){
        charPressed = e.target.id;
    } else { charPressed = e.key; }

    if (currentStyleSheet.id == "modernSpace" && (charPressed == "Escape" || charPressed == "Backspace" || charPressed == "ArrowUp" || charPressed == "ArrowLeft" || charPressed == "ArrowDown" || charPressed == "ArrowUp" || charPressed == "ArrowRight" || charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown")) {
        if (charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown") {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = specialKeysBase;
        } else {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = accentBaseColor;
        }
    }
}

function isMobile(){
    if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
        return true;
    } else{ return false }
}

function gameSetup(){
    currentStyleSheet = modernSpace;
    highScoreElement.innerHTML = highScore;
    currentScoreElement.innerHTML = points;

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    if(isMobile()){
        charSet = 'qwrtyuiopasmdfgh';
    }else{
        charSet = 'abcdefghijklmnopqrsatuvwxyz';
    }

    getRandomSequence(5);
}

gameSetup();
