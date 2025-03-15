let keyPressedColor = '#7E7F83';
let keyBaseColor = '#000000';

let accentPressedColor = '#CC2500';
let accentBaseColor = '#FF2E00';

const classicDark = document.getElementById("classicDark");
const typeWriter = document.getElementById("typeWriter");
const modernSpace = document.getElementById("modernSpace");


let currentStyleSheet;


function setColorVariables(styleSheet){
    if(styleSheet == "darkClassic.css"){        
        keyPressedColor = '#7E7F83';
        keyBaseColor = '#000000';
    }else if(styleSheet == "typeWriter.css"){        
        console.log("whats");   
        keyPressedColor = '#C39809';
        keyBaseColor = '#F4C015';
    }
    else if(styleSheet == "modernSpace.css"){        
        console.log("whats");   
        keyPressedColor = '#EBEBEB';
        keyBaseColor = '#F9F9F9';
    }
    console.log('ummm');
    console.log(keyPressedColor);
}

function changeKeyboard(keyboard){
    setColorVariables(keyboard);

    if(keyboard == "darkClassic.css"){
        currentStyleSheet = classicDark;

        classicDark.style.display = 'block';
        typeWriter.style.display = 'none';        
        modernSpace.style.display = 'none';
    }else if(keyboard == "typeWriter.css"){
        currentStyleSheet = typeWriter;

        typeWriter.style.display = 'block';
        classicDark.style.display = 'none';
        modernSpace.style.display = 'none';        
    } else if(keyboard == "modernSpace.css"){
        currentStyleSheet = modernSpace;

        modernSpace.style.display = 'block';   
        typeWriter.style.display = 'none';
        classicDark.style.display = 'none';           
    }
}

function keyDownHandler(e){
    console.log(e.key);
    console.log("down handler");
    console.log(keyPressedColor);
    if(currentStyleSheet.id == "modernSpace" && (e.key == "Escape" || e.key == "Backspace" || e.key == " " || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowRight")){        
        if(e.key == " "){
            document.getElementById("space-"+currentStyleSheet.id).style.backgroundColor = accentPressedColor; 
        } else{
            document.getElementById(e.key+"-"+currentStyleSheet.id).style.backgroundColor = accentPressedColor; 
        }        
    }else{
        if(e.key == 'Shift'){
            document.getElementById("ShiftL-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ShiftR-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;    
        } else if(e.key == 'Control'){
            document.getElementById("ControlL-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("ControlR-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;  
        } else if(e.key == 'Alt'){
            document.getElementById("AltL-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;
            document.getElementById("AltR-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;  
        } 
        else if(e.key == " "){
            document.getElementById("space-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;
        }  
        else{
            document.getElementById(e.key+"-"+currentStyleSheet.id).style.backgroundColor = keyPressedColor;    
        }
    }
}

function keyUpHandler(e){    
    console.log(e.key);
    console.log("up handler");
    console.log(keyBaseColor);
    if(currentStyleSheet.id == "modernSpace" && (e.key == "Escape" || e.key == "Backspace" || e.key == " " || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowRight")){        
        if(e.key == " "){
            document.getElementById("space-"+currentStyleSheet.id).style.backgroundColor = accentBaseColor; 
        } else{
            document.getElementById(e.key+"-"+currentStyleSheet.id).style.backgroundColor = accentBaseColor; 
        }        
    }else{
        if(e.key == 'Shift'){
            document.getElementById("ShiftL-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ShiftR-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;    
        } else if(e.key == 'Control'){
            document.getElementById("ControlL-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("ControlR-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;  
        } else if(e.key == 'Alt'){
            document.getElementById("AltL-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;
            document.getElementById("AltR-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;  
        } 
        else if(e.key == " "){
            document.getElementById("space-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;
        }  
        else{
            document.getElementById(e.key+"-"+currentStyleSheet.id).style.backgroundColor = keyBaseColor;    
        }
    }
}

currentStyleSheet = classicDark;
console.log(currentStyleSheet.id);
document.addEventListener("keydown", keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler,false);

// console.log(classicDarkKeys.length);
// console.log(typeWriterKeys.length);
// console.log(modernSpaceKeys.length);

// setColorVariables('style.css');