'use client'

import CountdownTimer from "./countDownTimer";

import { useSearchParams } from 'next/navigation';

export default function page(){

    const team  = useSearchParams();

    console.log("team is " + JSON.parse(team.get('gameDiff')));

    function gameDiff(){
        console.log(JSON.parse(team.get('gameDiff')));
        if(JSON.parse(team.get('gameDiff')) == true){
            return true;
        } else{ return false; }
    }
    
    return(
        <CountdownTimer startTime={3} nextRoute={'/GameScreen'} easy={gameDiff()}/>
    )
}