'use client'

import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ seconds }) => {

    // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60)
        .toString()
        .padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <span>{formatTime(seconds)}</span>        
    );
};

export default CountdownTimer;