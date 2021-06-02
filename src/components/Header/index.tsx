import Switch from 'react-switch';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BsMoon, BsSun } from 'react-icons/bs';

import { PlayerContext } from '../../contexts/PlayerContext';

import { HeaderContainer, Logo } from './styles';


interface HeaderProps {
    toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
    const { isOpened } = useContext(PlayerContext)
    const themeContext = useContext(ThemeContext)


    const currentData = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR
    })
    
    return (
        <HeaderContainer className={isOpened && 'PlayerOpened'}>
            <Logo>
                <img src="/logo.svg" alt="RocketCast" />
                <h2>RocketCast</h2>
            </Logo>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentData}</span>

            <Switch 
                className={'switch'}
                onChange={toggleTheme}
                checked={themeContext.card !== '#FFF'}
                checkedIcon={
                    <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}>
                        <BsMoon />
                    </div>
                }
                uncheckedIcon={
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}>
                    <BsSun />
                </div>
                }
                offColor={'#E6E8EB'}
                onColor={'#0D1117'}
                activeBoxShadow={'0 0 2px 3px #E935C5'}
            />
        </HeaderContainer>
    )
}