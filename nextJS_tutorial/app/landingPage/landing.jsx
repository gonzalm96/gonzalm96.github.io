'use client'

import gameStyles from '../GameScreen/gameStyles.module.scss';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import easy from '../assets/easy.png';
import challenging from '../assets/challenging.png';
import closeIcon from '../assets/X.svg';


function Header({ title, titleAccent }){
    return  <div className={gameStyles.introTitle}>
                <h1>{title}</h1>
                <h2><span className={gameStyles.titleAccent}>{titleAccent}</span></h2>
            </div>;
};

export default function Landing({ title, initialSeconds }){  
    
    let [modal, setModal] = useState(false);
    let [help, setHelp] = useState(false);
    let [startAnimation, setAnimation] = useState(false);

    var startIndx = null;

    function animationModal(){
        console.log("-----------");
        console.log(startIndx);
        console.log(help);
        if(startAnimation){
            if(help){
                console.log("slideUp");
                startIndx = 1;
                console.log(startIndx);
                return gameStyles.slideUp;
            } else{
                console.log("slideDown");
                startIndx = null;
            return gameStyles.slideDown;
            }
        }
        else { 
            return null 
        }
    };

    function startGame(){        
        setModal(true);
    }

    return(
        <div className={gameStyles.landingContainer}> 
                <Header title="Thumb Thumb" titleAccent="Revolution" />
                {/* Still have to style these buttons!! */}



                <button className={gameStyles.startButton} onClick={startGame}>Start Game</button>
                <button className={gameStyles.howButton} onClick={ () => { setHelp(true); setAnimation(true)} }> How to Play </button>
                <div className={modal ? gameStyles.difficultyModal + " " + gameStyles.slideUp : gameStyles.difficultyModal}>
                    <Link href={{ pathname: '/countDown', query: { gameDiff: JSON.stringify(true) } }} className={gameStyles.difficultyButton}>Easy <img src={easy.src} /></Link> 
                    <Link href={{ pathname: '/countDown', query: { gameDiff: JSON.stringify(false) } }} className={gameStyles.difficultyButton}>Challenging <img src={challenging.src} /></Link>                                         
                </div>
                
                <div className={gameStyles.helpModal + " " + animationModal()}>
                    <div className={gameStyles.closeContainer}>
                        <button className={gameStyles.closeButton} onClick={ () => { setHelp(false);} }>
                            <img src={closeIcon.src} />
                        </button>
                    </div>
                    <h2 className={gameStyles.heading4 + " " + gameStyles.margin__bottom__none}>The Goal</h2>
                    <p className={gameStyles.p + " " + gameStyles.margin__top__small}>Welcome to TTR, the sequence matching game that will challenge your speed and memory!</p>

                    
                    <h2 className={gameStyles.heading4 + " " + gameStyles.margin__bottom__none + " " + gameStyles.margin__top__small}>How to Play</h2>
                    <p className={gameStyles.p + " " + gameStyles.margin__top__small}>Using the D-Pad or keyboard, match as many randomly generated sequences of arrows as fast as possible!</p>
                    <h2 className={gameStyles.heading5 + " " + gameStyles.margin__bottom__small + " " + gameStyles.margin__top__small}>Easy Arrows</h2>
                    <img src={easy.src} />
                    <p className={gameStyles.p + " " + gameStyles.margin__top__small}>Arrows and buttons match both direction and color for their respective direction.</p>

                    <h2 className={gameStyles.heading5 + " " + gameStyles.margin__bottom__small + " " + gameStyles.margin__top__small}>Challenging Arrows</h2>
                    <img src={challenging.src} />
                    <p className={gameStyles.p + " " + gameStyles.margin__bottom__none + " " + gameStyles.margin_top_small}>All 4 directions of arrows and D-Pad buttons are the same color.</p>

                </div>
                
        </div>
    );
}