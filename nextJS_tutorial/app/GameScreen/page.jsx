'use client'

import GameArea from "./game-area";
import Link from 'next/link';
import BackButton from '../globalComponents/backButton';

import gameStyles from './gameStyles.module.scss';

import { useSearchParams } from 'next/navigation'

export default function HomePage(){    

        const team  = useSearchParams();
    
        console.log("team is " + JSON.parse(team.get('gameDiff')));
    
        function difficulty(){
            console.log(JSON.parse(team.get('gameDiff')));
            if(JSON.parse(team.get('gameDiff')) == true){
                return true;
            } else{ return false; }
        }

    return(
        <div className={gameStyles.gameArea}>
            <BackButton path='/' />
            <GameArea title="Go!" easy={difficulty()}/>            
        </div>
    );
}
