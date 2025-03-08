let key = document.getElementById("test");

let currentStylesheet = document.getElementById('stylesheet');
let keyPressedColor = '#7E7F83';
let keyBaseColor = '#000000';

function setColorVariables(styleSheet){
    if(styleSheet == "darkClassic.css"){        
        keyPressedColor = '#7E7F83';
        keyBaseColor = '#000000';
    }else if(styleSheet == "typeWriter.css"){        
        console.log("whats");   
        keyPressedColor = '#C39809';
        keyBaseColor = '#F4C015';
    }
}

function changeKeyboard(keyboard){
    setColorVariables(keyboard);
    currentStylesheet.href = keyboard;
    
    let currentKeyStying = document.getElementsByClassName('key');

    for(let i = 0; i < currentKeyStying.length; i++){
        currentKeyStying[i].style.backgroundColor = keyBaseColor;
    }
}

function keyDownHandler(e){
    console.log(e.key);
    if(e.key == 'Shift'){
        document.getElementById("ShiftL").style.backgroundColor = keyPressedColor;
        document.getElementById("ShiftR").style.backgroundColor = keyPressedColor;    
    } else if(e.key == 'Control'){
        document.getElementById("ControlL").style.backgroundColor = keyPressedColor;
        document.getElementById("ControlR").style.backgroundColor = keyPressedColor;  
    } else if(e.key == 'Alt'){
        document.getElementById("AltL").style.backgroundColor = keyPressedColor;
        document.getElementById("AltR").style.backgroundColor = keyPressedColor;  
    } 
    else if(e.key == " "){
        document.getElementById("space").style.backgroundColor = keyPressedColor;
    } 
    else{
    document.getElementById(e.key).style.backgroundColor = keyPressedColor;    
    }
}

function keyUpHandler(e){
    console.log(e.key);
    if(e.key == 'Shift'){
        document.getElementById("ShiftL").style.backgroundColor = keyBaseColor;
        document.getElementById("ShiftR").style.backgroundColor = keyBaseColor;    
    } else if(e.key == 'Control'){
        document.getElementById("ControlL").style.backgroundColor = keyBaseColor;
        document.getElementById("ControlR").style.backgroundColor = keyBaseColor;  
    } else if(e.key == 'Alt'){
        document.getElementById("AltL").style.backgroundColor = keyBaseColor;
        document.getElementById("AltR").style.backgroundColor = keyBaseColor;  
    }  
    else if(e.key == " "){
        document.getElementById("space").style.backgroundColor = keyBaseColor;
    } 
    else{        
        document.getElementById(e.key).style.backgroundColor = keyBaseColor;        
    }
}

document.addEventListener("keydown", keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler,false);

setColorVariables('style.css');