import gameStyles from '../GameScreen/gameStyles.module.scss';

export default function Layout({ children }) {
    return (
        <div className={gameStyles.gameContainer}>{children}</div>      
    );
  }