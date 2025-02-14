import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Birdy from './Birdy'
import Canvas from './Canvas'
import Column from './Column'


const subject= "React";
const BIRDY_X_POSITION = 500/3;
const BIRDY_START_Y = window.innerHeight/2;

const WINDOW_HEIGHT = 760;
const WINDOW_WIDTH = window.innerWidth;
const BIRD_HEIGHT = 115;
const BASE_COL_WIDTH = 75;
const COL_GAP = 150;

const BASE_COL_HEIGHT = (WINDOW_HEIGHT/2);

let totalScore;
let numPressed;

let intervalActive = false;

let gameRunning = true;

function colHeightDiff(){

  let topColHeight = Math.random() * ((WINDOW_HEIGHT - COL_GAP) - COL_GAP) + COL_GAP;
  let botColHeight = WINDOW_HEIGHT - (topColHeight + COL_GAP);  
  
  return [topColHeight, botColHeight];
}

function App() {

  let currentBirdHeight = BIRD_HEIGHT;

  const [position, setBirdyPosition] = useState(300);
  const [objPos, setObjectPosition] = useState(currentBirdHeight - 60);
  const [objHeight, setObjectHeight] = useState(BASE_COL_HEIGHT);

  const handleSpacePress = () => {
    if(position < (BIRD_HEIGHT/2)){
      setBirdyPosition(0)
    } else{
      setBirdyPosition((position) => position - 100);      
    }
  };

  function checkCollision(element){
    if(element.xPos === BIRDY_X_POSITION){
      console.log(true);
    }
  };

  useEffect(() => {
    let colPosX;    
      if(objPos > -BASE_COL_WIDTH){
        colPosX = setInterval(() => {          
          setObjectPosition((objPos) => objPos - 6 );          
        }, 25);            
      } else { setObjectPosition(WINDOW_WIDTH + 60) }    

    return () => {      
      clearInterval(colPosX);  
    }
  });
  
  useEffect(() => {    
    document.addEventListener("keydown", handleSpacePress);
    let birdPosY  
    if(position < WINDOW_HEIGHT - (BIRD_HEIGHT/2)){
      birdPosY = setInterval(() => {
        setBirdyPosition((position) => position + 10);        
        
      }, 24);
    } 

    return () => {        
      document.removeEventListener("keydown", handleSpacePress);
      clearInterval(birdPosY);     
    }
  });

  

  return (
    <>
        <div className="canvas">
          <Column checkCollision={checkCollision} colHeightDiff={colHeightDiff} width={BASE_COL_WIDTH} posX={objPos} posY={0}/>
          {/* Birdy Works */}
          <Birdy posX = {BIRDY_X_POSITION} posY ={position} handleSpacePress={handleSpacePress} height={WINDOW_HEIGHT}/>
          {/* <Column background={'orange'} isTop={false} bottom={0} colHeightDiff={colHeightDiff} width={BASE_COL_WIDTH} posX={objPos} posY={WINDOW_HEIGHT - (objHeight + 5)}/> */}
        </div>      
    </>
  )
}

export default App