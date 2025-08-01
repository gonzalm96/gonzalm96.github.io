'use client'

import KeyButton from './key-button';

import buttonStyles from './buttonStyles.module.scss';

export default function ButtonContainer({ easy }){
        const handlePressButton = (e) => { 
        if(timeOn){                       
            const newInput = arrowSet.find((dir) => ((dir.key == e.currentTarget.id) || (dir.key == e.key)));
            // console.log("new input below");
            // console.log(newInput);        

            if(inputs.length == 0){                        
                setInput([newInput]);
            } else { setInput([...inputs, newInput]); }  
        }
    }

    return(
        <div className={buttonStyles.inputButtonsContainer}>            
            <KeyButton buttKey="ArrowUp" direction="ArrowUp" easy={easy} onClick={handlePressButton} />                       
            <KeyButton buttKey="ArrowRight" direction="ArrowRight" easy={easy} onClick={handlePressButton} />
            <KeyButton buttKey="ArrowLeft" direction="ArrowLeft" easy={easy} onClick={handlePressButton} /> 
            <KeyButton buttKey="ArrowDown" direction="ArrowDown" easy={easy} onClick={handlePressButton} />
        </div>
    );
}