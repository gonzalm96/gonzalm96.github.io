import gameStyles from '../GameScreen/gameStyles.module.scss';

import Link from 'next/link';
import backArrow from '../assets/backArrow.svg'

export default function BackButton({ path }){
    return <div className={gameStyles.backButtonContainer}>
                <Link href={path} className={gameStyles.backArrow}><img key='arrowBack1' src={backArrow.src} /></Link>     
           </div>  
}