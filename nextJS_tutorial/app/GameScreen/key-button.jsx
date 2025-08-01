'use client'

import buttons from './buttons.module.scss'
 
export default function KeyButton({ direction, onClick, directionStyle, buttKey, easy }){

    function buttonStyle() {
        if(easy){
            if(direction == 'ArrowUp'){
                return buttons.arrowButton + " " + buttons.up + " " + buttons.color;
            } else if(direction == 'ArrowDown'){
                return buttons.arrowButton + " " + buttons.down + " " + buttons.color;
            } else if(direction == 'ArrowLeft'){
                return buttons.arrowButton + " " + buttons.left + " " + buttons.color;
            } else{
                return buttons.arrowButton + " " + buttons.right + " " + buttons.color;        
            }
        } else{
            if(direction == 'ArrowUp'){
                return buttons.arrowButton + " " + buttons.up;
            } else if(direction == 'ArrowDown'){
                return buttons.arrowButton + " " + buttons.down;
            } else if(direction == 'ArrowLeft'){
                return buttons.arrowButton + " " + buttons.left;
            } else{
                return buttons.arrowButton + " " + buttons.right;         
            }
        }
    }

    return(
        <button key={buttKey} id={buttKey} className={buttonStyle()} onClick={onClick} onKeyDown={onClick}><span className={buttons.centerText}>{direction}</span></button>
    )
}