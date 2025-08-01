'use client'

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import gameStyles from '../GameScreen/gameStyles.module.scss';

export default function CountdownTimer({ startTime, easy }){

    const [counter, setCounter] = useState(startTime);
    const newRoute = useRouter();

    useEffect(() => {

        if(counter <= 0){
            newRoute.push(`/GameScreen?gameDiff=${easy}`);
        }

        const time = setInterval(() => {
            setCounter(counter - 1);
        }, 1000)
    }, [counter])


    return(
        <div>
            <h1 className={gameStyles.pageTitle}>Ready?</h1>
            <h2 className={gameStyles.titleAccent}>{counter}</h2>
        </div>
    );

}