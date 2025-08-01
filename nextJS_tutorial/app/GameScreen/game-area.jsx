/*
* - What this page must have 
*   - Timer Setting
*   - Score (Current Streak/High Score) DONE
*   - Matching Sequence DONE
*   - Sequence input DONE
*   - Input buttons DONE
*/

'use client'

import gameStyles from './gameStyles.module.scss';

import InputArea from "./input-area"
import MatchingArrows from "./matching-arrows";
import ButtonContainer from "./button-container";
import CountdownTimer from './countDownTimer'; 

import arrowU from '../assets/Up.svg';
import arrowD from '../assets/Down.svg';
import arrowL from '../assets/Left.svg';
import arrowR from '../assets/Right.svg';

import arrowUColor from '../assets/u-color.svg';
import arrowDColor from '../assets/d-color.svg';
import arrowLColor from '../assets/l-color.svg';
import arrowRColor from '../assets/r-color.svg';

import { useState, useRef, useEffect, useMemo } from "react";

export default function GameArea({ title, initialSeconds, easy }){    
    let [matchingSequence, setMatch] = useState([]);
    let [inputs, setInput] = useState([]); 
    
    let [success, setSuccess] = useState(0);
    
    let [seconds, setSeconds] = useState(30);
    let [streak, setStreak] = useState(0);
    let [highScore, setHighScore] = useState(0);    
    let [gameOver, setGameOver] = useState(false);
    let [timeOn, setTimer] = useState(true);

    let sequenceOrder = [];   
    let solution = []; 
    const difficulty = 5;
    
    const arrowValues = [{key:"ArrowDown", imageUrl: arrowD.src},{key:"ArrowUp", imageUrl: arrowU.src},{key:"ArrowLeft", imageUrl: arrowL.src},{key:"ArrowRight", imageUrl: arrowR.src}];
    const arrowValuesColor = [{key:"ArrowDown", imageUrl: arrowDColor.src},{key:"ArrowUp", imageUrl: arrowUColor.src},{key:"ArrowLeft", imageUrl: arrowLColor.src},{key:"ArrowRight", imageUrl: arrowRColor.src}];
    let arrowSet = [];

    function newGame(){
        // console.log("supposed to reset I guess");
        let resetArrays = [];
        setInput(resetArrays);
        setGameOver(false);
        setSeconds(30);
        setStreak(0);
        newSequence();
    }

    function resetInput(){
        // console.log("supposed to reset I guess");
        let resetArrays = [];
        setInput(resetArrays);                
    }

    function getRandomSequence(array,difficulty){        

        for (let i = 0; i < difficulty; i++) {
            let direction = arrowSet[(Math.floor(Math.random() * arrowSet.length))];
            sequenceOrder[i] = direction; 
        }
        
        setMatch(array);
        sequenceOrder = [];
    }

    function newSequence(){
        getRandomSequence(sequenceOrder, difficulty);
        //console.log(solution);
    }    

    function startTime(){
        setTimer(true);
    }

    //call function passed in from the parent to get the high score to display on loading screen
    //figure out how to cache high score for next time page loads?
    function timeUp() {    
        setGameOver(true);
        setTimer(false);     
    }

    function isSuccess(correct) {
        setSuccess(correct);
    }

    useEffect(() => {
        console.log("in game area component: " + easy);
        if(easy){
            arrowSet = arrowValuesColor;
        }
        else{
            arrowSet = arrowValues;
        }

        newSequence();        
        
    }, []);

    // useMemo(() => {
    //     let interval;

    //     if(timeOn){
    //         interval = setInterval(() => {
    //             setSeconds((prevSeconds) => prevSeconds - 1);
    //         }, 1000);
    //     } else if(seconds === 0){
    //         clearInterval(interval);
    //         timeUp();
    //     }
        
    //     return() => {
    //         clearInterval(interval);
    //     }
    // }, [timeOn]);

      useMemo(() => {
        if(success != 0){
            newSequence();
        }
        const timer = setTimeout(() => {
            setSuccess(0); // Reset after animation completes
          }, 300); // Match duration in CSS
    
          return () => clearTimeout(timer); // Cleanup on unmount or update
      }, [success]);

    function MainGame() {
        return <div>
            <div className={gameStyles.arrowsArea}>
                <h1 className={gameStyles.pageTitle}>{title}</h1>
                {/* <p className={gameStyles.timer}>Time Remaining : <CountdownTimer seconds={seconds} /></p> */}
                <h2 className={gameStyles.heading4}>Match:</h2>                      
                <MatchingArrows keyInput="match" sequenceOrder={matchingSequence} success={success} />             
                { gameOver ? '' : <InputArea inputs={inputs} arrowSet={arrowSet} matchingSequence={matchingSequence} setInput={setInput} keyTag="input" isSuccess={isSuccess} resetInput={resetInput} setStreak={setStreak} highScore={highScore} streak={streak} setHighScore={setHighScore}/> }        
            </div>

            <div id="matchContainer" className={gameStyles.scoreContainer}>
                <div className={gameStyles.scoreBoard}><p>Current Streak: {streak}</p></div>
                <div className={gameStyles.scoreBoard}><p>High Score: {highScore}</p></div>
            </div>
        </div>;
    }

    function EndGame() {                

        return <div>
             <h1 className={gameStyles.pageTitle}>Game Over!</h1>
             <h2 className={gameStyles.endGameSubtitle}>Reset and try again!!</h2>           
            <div id="matchContainer" className={gameStyles.scoreContainerEnd}>
                <div className={gameStyles.scoreBoard}><p>Current Streak: {streak}</p></div>
                <div className={gameStyles.scoreBoard}><p>High Score: {highScore}</p></div>
            </div>
        </div>;
    }

    function getArrowSet(){
        if(easy){
            arrowSet = arrowValuesColor;
        } else{ arrowSet = arrowValues; }
    }

    getArrowSet();

    return(
        <div className={gameStyles.mainContainer}>
            { gameOver ? <EndGame /> : <MainGame />}
            <div className={gameStyles.startButtonContainer}>
            <ButtonContainer easy={easy}/>            
            <button onClick={gameOver ? newGame : startTime} className={easy ? gameStyles.timerButton+" "+gameStyles.color : gameStyles.timerButton}>{gameOver ? 'Reset' : 'Start'}</button>
            </div>
        </div>
    );
}