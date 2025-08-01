'use client'

import arrowStyles from './arrowStyle.module.scss';

export default function Arrow({ arrow }){
    if(arrow == null){
        return <p>What</p>
    } 
    else{
        return <img key={arrow.key} src={arrow.imageUrl} className={arrowStyles.arrow}/>    
    }
}