let keyPressedColor = '#7E7F83';
let keyBaseColor = '#000000';

let accentPressedColor = '#CC2500';
let accentBaseColor = '#FF2E00';

let specialKeysPressed = '#003052';
let specialKeysBase = '#00538F';

const classicDark = document.getElementById("classicDark");
const typeWriter = document.getElementById("typeWriter");
const modernSpace = document.getElementById("modernSpace");

const highScoreElement = document.getElementById("highScore");
const currentScoreElement = document.getElementById("currentScore");
const failureMessage = document.getElementById("failure-message");


let matchString = document.getElementById("match-string");
let matchStringSolution = document.getElementById("match-string-solution");


let currentStyleSheet;

let highScore = 0;
let points = 0;
let solution = '';
let gameOver = false;

function getRandomString(difficulty) {
    let newMatchString = '';
    const charSet = 'abcdefghijklmnopqrsatuvwxyz';

    for (let i = 0; i < difficulty; i++) {
        newMatchString += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    matchString.innerHTML = newMatchString;
}

function checkString(key) {
    let nextLetter = document.createElement('span');
    nextLetter.innerText = key;

    if (matchString.innerText.charAt(solution.length) == key) {
        nextLetter.classList.add("correct");
        matchStringSolution.appendChild(nextLetter);
        solution += key;

        if(solution.length == matchString.innerText.length){
            checkSolution();
        }

        return true;
    }
    else {
        nextLetter.classList.add("wrong");
        matchStringSolution.appendChild(nextLetter);
        solution += key;
        return false;
    }

}

function removeLastChar() {
    solution = solution.slice(0, -1);
    matchStringSolution.removeChild(matchStringSolution.lastChild);
}

function checkSolution() {
    if (matchString.innerHTML == solution) {
        if (points >= highScore) {
            points++;
            highScore++;
        } else { points++; }
        getRandomString(5);
        highScoreElement.innerHTML = highScore;
        currentScoreElement.innerHTML = points;
    } else {
        points = 0; currentScoreElement.innerHTML = points;
    }
    solution = '';
    matchStringSolution.innerHTML = '';
}

function setColorVariables(styleSheet) {
    if (styleSheet == "darkClassic.css") {
        keyPressedColor = '#7E7F83';
        keyBaseColor = '#000000';
    } else if (styleSheet == "typeWriter.css") {
        keyPressedColor = '#D3B25F';
        keyBaseColor = '#F2E8CF';
    }
    else if (styleSheet == "modernSpace.css") {
        keyPressedColor = '#D6D6D6';
        keyBaseColor = '#F9F9F9';
    }
}

function changeKeyboard(keyboard) {
    setColorVariables(keyboard);

    if (keyboard == "darkClassic.css") {
        currentStyleSheet = classicDark;
        classicDark.style.display = 'flex';
        typeWriter.style.display = 'none';
        modernSpace.style.display = 'none';
    }
    else if (keyboard == "typeWriter.css") {
        currentStyleSheet = typeWriter;
        typeWriter.style.display = 'flex';
        classicDark.style.display = 'none';
        modernSpace.style.display = 'none';
    }
    else if (keyboard == "modernSpace.css") {
        currentStyleSheet = modernSpace;
        modernSpace.style.display = 'flex';
        typeWriter.style.display = 'none';
        classicDark.style.display = 'none';
    }
}

function resetGame(){
    gameOver = false;
    solution = '';
    matchStringSolution.innerHTML = '';
    points = 0;
    currentScoreElement.innerHTML = points;
    failureMessage.style.visibility = "hidden";
    getRandomString(5);
}

function keyDownHandler(e) {

    if (currentStyleSheet.id == "modernSpace" && (e.key == "Escape" || e.key == "Backspace" || e.key == " " || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowRight" || e.key == "Help" || e.key == "Home" || e.key == "PageUp" || e.key == "Delete" || e.key == "End" || e.key == "PageDown")) {
        if (e.key == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            if(gameOver){
                resetGame();
            }            
        } else if (e.key == "Backspace") {
            document.getElementById(currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            removeLastChar();
        }
        else if (e.key == "Help" || e.key == "Home" || e.key == "PageUp" || e.key == "Delete" || e.key == "End" || e.key == "PageDown") {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = specialKeysPressed;
        } else {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            if(!checkString(e.key)){
                gameOver = true;
                failureMessage.style.visibility = "visible";  
            }
        }
    } else {
        if (e.key == 'Shift') {
            document.getElementById("ShiftL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ShiftR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        } else if (e.key == 'Control') {
            document.getElementById("ControlL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ControlR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        } else if (e.key == 'Alt') {
            document.getElementById("AltL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("AltR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        }
        else if (e.key == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            if(gameOver){
                resetGame();
            }         
        }
        else if (e.key == "Backspace") {
            document.getElementById(currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            removeLastChar();
        }
        else {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            if(!checkString(e.key)){
                gameOver = true;
                failureMessage.style.visibility = "visible";                
            }
        }
    }


}

function keyUpHandler(e) {
    if (currentStyleSheet.id == "modernSpace" && (e.key == "Escape" || e.key == "Backspace" || e.key == " " || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowRight" || e.key == "Help" || e.key == "Home" || e.key == "PageUp" || e.key == "Delete" || e.key == "End" || e.key == "PageDown")) {
        if (e.key == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = accentBaseColor;
        } else if (e.key == "Help" || e.key == "Home" || e.key == "PageUp" || e.key == "Delete" || e.key == "End" || e.key == "PageDown") {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = specialKeysBase;
        } else {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = accentBaseColor;
        }
    } else {
        if (e.key == 'Shift') {
            document.getElementById("ShiftL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ShiftR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        } else if (e.key == 'Control') {
            document.getElementById("ControlL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ControlR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        } else if (e.key == 'Alt') {
            document.getElementById("AltL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("AltR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
        else if (e.key == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
        else {
            document.getElementById(e.key + "-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
    }
}

currentStyleSheet = classicDark;
getRandomString(5);
highScoreElement.innerHTML = highScore;
currentScoreElement.innerHTML = points;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);