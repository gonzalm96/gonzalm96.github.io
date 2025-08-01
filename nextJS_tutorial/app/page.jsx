import global from './global.module.scss';
import Landing from './landingPage/landing';

export default function Page(){    
    return(
        <div className={global.body}>
                <Landing />         
        </div>
    );
}