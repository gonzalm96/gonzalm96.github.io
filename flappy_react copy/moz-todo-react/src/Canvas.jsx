import React, { useState, useEffect, useRef } from 'react'
import birdy from './dump.png'

const Canvas = props => {
    const {draw, ...rest} = props
    const canvasRef = useRef(null)

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      //starting position of the bird
      var startPositionX = canvas.width/3;
      var startPositionY = canvas.height/2.5;
      var birdHeight = 40;

      //difference that the bird falls each frame draw
      var fallingDeltaY = -3.5;
      var risingDeltaY = fallingDeltaY * 1.5;
      var deltaX = -2;

      //array of pipes being rendered in window
      const pipeOffset = 150;
      var numPipes = 4;
      var upperPipes = [];
      var bottomPipes = [];
      var pipeIndex = 0;


      //pipes starting x position and offset
      var pipeOneX = canvas.width; //+ pipeOffset;
      var pipeTwoX = canvas.width + pipeOffset;
      var pipeThreeX = canvas.width +  (pipeOffset * 2);
      var pipeFourX = canvas.width + (pipeOffset * 3);

      //boolean game controlers
      var runGame = true;
      var spacePressed = false;
      var barTouched = false;
        
      const image = new Image();
      image.src = birdy;
  
      image.onload = () => {
        context.drawImage(image, startPositionX, startPositionY, 50, 50);
      };
        

      function canvasDimensions(){
        console.log(startPositionY + ": startPositionY");
      }

      function fallingBirdy(){
        let fallPos = 
        setInterval( () =>{
          canvasDimensions();
          context.drawImage(image, startPositionX, startPositionY, 50, 50);
          startPositionY -= fallingDeltaY;
          if(startPositionY > canvas.height - 15){
              console.log("endGame goes here!");
              clearInterval(fallPos);
          }else{
            fallingBirdy();
          }
        }, 1000);
      }
            
      fallingBirdy();
    }, [draw]);

    

    return <canvas ref={canvasRef} {...rest} width={320} height={480}/>
}

export default Canvas