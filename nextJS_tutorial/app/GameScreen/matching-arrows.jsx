'use client'
 
import Arrow from './arrow';

import arrowContainer from './arrowContainer.module.scss';

export default function MatchingArrows({ sequenceOrder, success }){

    const isSuccessfull = (success) => {
        
        if(success === 1){
            console.log(success + " - success value");
            return arrowContainer.matchStringContainer + " " + arrowContainer.successAnimation;
        }
        else if(success === 2){
            return arrowContainer.matchStringContainer + " " + arrowContainer.failureAnimation;
        }
        else{
            return arrowContainer.matchStringContainer;
        }
    }

    return( 
        <div id="match-string" className={isSuccessfull(success)}>
            {
                sequenceOrder.map((sequence, index) => (
                    <Arrow key={index+"-matching"} arrow={sequence} index={index} />
                ))
            }
        </div>
    )
}