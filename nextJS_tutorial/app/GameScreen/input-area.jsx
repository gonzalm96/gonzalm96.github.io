'use client'

import Arrow from "./arrow";
import inputArea from './inputArea.module.scss';

import { useEffect } from "react";
 
export default function InputArea({ inputs, keyInput, keyTag, setInput, arrowSet, matchingSequence, isSuccess, resetInput, setStreak, highScore, streak, setHighScore }){

        useEffect(() => {
        if(inputs.length >= 1){
            if(inputs.length == matchingSequence.length){
                if(inputs.length != 0 && inputs[inputs.length-1].key == matchingSequence[inputs.length-1].key){    
                    if(highScore <= streak){
                        setStreak(streak + 1);
                        setHighScore(highScore + 1);
                    } else{                
                        setStreak(streak + 1);
                    }
                    isSuccess(1);      
                    resetInput();
                } else{
                    //case: fails the last input
                    isSuccess(2); 
                    setStreak(0);
                    resetInput();
                }
            }
            else if(inputs[inputs.length-1].key != matchingSequence[inputs.length-1].key){            
                isSuccess(2);  
                setStreak(0);
                resetInput();
            }          
        }

        return() => {
            //console.log("done with this? learn what is needed here");
        }
    }, [inputs]);

        const handlePress = (e) => { 
            const newInput = arrowSet.find((dir) => ((dir.key == e.currentTarget.id) || (dir.key == e.key)));
            console.log("new input below");
            console.log(newInput);        

            if(inputs.length == 0){                        
                setInput([newInput]);
            } else { setInput([...inputs, newInput]); }  
        }

        useEffect(() => {
            console.log(arrowSet + "wut");
            document.addEventListener('keydown', handlePress);
    
            return() => {
                document.removeEventListener('keydown', handlePress);
            }
        }, [handlePress]);

    return(       
        <div className={inputArea.inputArea}>
            <div className={inputArea.inputBox}>
            {             
                inputs.map((input, index) => (
                    <Arrow key={keyInput+keyTag+index} arrow={input}/>
                ))
            }            
            </div>
        </div>                    
    )
}