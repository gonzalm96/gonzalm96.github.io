import React, { useEffect, useRef } from 'react';

function CanvasImage({ imageUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };
  }, [imageUrl]);

  return <canvas ref={canvasRef} />;
}

export default CanvasImage;