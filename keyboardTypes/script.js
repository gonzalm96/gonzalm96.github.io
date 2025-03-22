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

let charSet;

function getRandomString(difficulty) {
    let newMatchString = '';

    for (let i = 0; i < difficulty; i++) {
        newMatchString += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    matchString.innerHTML = newMatchString;
}

function checkString(key) {
    let nextLetter = document.createElement('span');
    nextLetter.innerText = key[0];

    if (matchString.innerText.charAt(solution.length) == key[0] && !gameOver) {
        nextLetter.classList.add("correct");
        matchStringSolution.appendChild(nextLetter);
        solution += key[0];

        if(solution.length == matchString.innerText.length){
            checkSolution();
        }

        return true;
    }
    else {
        nextLetter.classList.add("wrong");
        matchStringSolution.appendChild(nextLetter);
        solution += key[0];
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

    setEvents();
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
    console.log("pressed");  
    let charPressed = '';
    if(isMobile()){
        console.log(e.target.id);
        charPressed = e.target.id;
    } else { console.log(e);
        charPressed = e.key; }

    if (currentStyleSheet.id == "modernSpace" && (charPressed == "Escape" || charPressed == "Backspace" || charPressed == " " || charPressed == "ArrowUp" || charPressed == "ArrowLeft" || charPressed == "ArrowDown" || charPressed == "ArrowUp" || charPressed == "ArrowRight" || charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown")) {
        if (charPressed == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            if(gameOver){
                resetGame();
            }            
        } else if (charPressed == "Backspace") {
            document.getElementById(currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            removeLastChar();
        }
        else if (charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown") {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = specialKeysPressed;
        } else {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            if(!checkString(charPressed)){
                gameOver = true;
                failureMessage.style.visibility = "visible";  
            }
        }
    } else {
        if (charPressed == 'Shift') {
            document.getElementById("ShiftL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ShiftR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        } else if (charPressed == 'Control') {
            document.getElementById("ControlL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ControlR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        } else if (charPressed == 'Alt') {
            document.getElementById("AltL-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("AltR-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        }
        else if (charPressed == " " || charPressed == "space-"+currentStyleSheet.id) {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            if(gameOver){
                resetGame();
            }         
        }
        else if (charPressed == "Backspace") {
            //document.getElementById(currentStyleSheet.id).style.backgroundColor = accentPressedColor;
            removeLastChar();
        }
        else {
            document.getElementById(isMobile() ? charPressed : charPressed + "-" + currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            console.log("HERE");
            if(!checkString(charPressed)){
                gameOver = true;
                failureMessage.style.visibility = "visible";                
            }
        }
    }


}

function keyUpHandler(e) {
    let charPressed = '';
    if(isMobile()){
        charPressed = e.target.id;
    } else { charPressed = e.key; }

    if (currentStyleSheet.id == "modernSpace" && (charPressed == "Escape" || charPressed == "Backspace" || charPressed == " " || charPressed == "ArrowUp" || charPressed == "ArrowLeft" || charPressed == "ArrowDown" || charPressed == "ArrowUp" || charPressed == "ArrowRight" || charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown")) {
        if (charPressed == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = accentBaseColor;
        } else if (charPressed == "Help" || charPressed == "Home" || charPressed == "PageUp" || charPressed == "Delete" || charPressed == "End" || charPressed == "PageDown") {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = specialKeysBase;
        } else {
            document.getElementById(charPressed + "-" + currentStyleSheet.id).style.backgroundColor = accentBaseColor;
        }
    } else {
        if (charPressed == 'Shift') {
            document.getElementById("ShiftL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ShiftR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        } else if (charPressed == 'Control') {
            document.getElementById("ControlL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ControlR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        } else if (charPressed == 'Alt') {
            document.getElementById("AltL-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("AltR-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
        else if (charPressed == " ") {
            document.getElementById("space-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
        else {
            document.getElementById(isMobile() ? charPressed : charPressed + "-" + currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }
    }
}

function isMobile(){
    if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
        return true;
    } else{ return false }
}

function setEvents(){
    for(let i = 0; i < charSet.length; i++){        
        let key = document.getElementById(charSet[i]+"-"+currentStyleSheet.id);
        key.addEventListener("touchstart", keyDownHandler);
        key.addEventListener("touchend", keyUpHandler);        
    }

    document.getElementById("space-" + currentStyleSheet.id).addEventListener("touchstart", keyDownHandler);
    document.getElementById("space-" + currentStyleSheet.id).addEventListener("touchend", keyUpHandler);        
}

function gameSetup(){
    currentStyleSheet = classicDark;
    highScoreElement.innerHTML = highScore;
    currentScoreElement.innerHTML = points;
    
    console.log("before");
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    if(isMobile()){
        charSet = 'abcdfghijlmnopqrsatuvwxyz';
    }else{
        charSet = 'abcdefghijklmnopqrsatuvwxyz';
    }

    setEvents();
    getRandomString(5);
}

gameSetup();
