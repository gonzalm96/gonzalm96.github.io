import gameStyles from './gameStyles.module.scss';

export default function Layout({ children }) {
    return (
        <div className={gameStyles.gameContainer}>{children}</div>      
    );
  }