import  style from './Header.module.css';

import sunLogo from '../assets/sunLogo.svg';

export function Header() {
    return(
        <header className={style.header}>
            <img src={sunLogo} alt="Logotipo" />
        </header>
    )
}