import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import Switch from 'react-switch';
import { BsMoon, BsSun } from 'react-icons/bs';

import { HeaderContainer, Logo } from './styles';


export function Header() {
    const { isOpened } = useContext(PlayerContext)

    const currentData = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR
    })

    function toggleTheme() {
        console.log('change')
    }

    
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
                checked={false}
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
                offColor={'#ccc'}
                onColor={'#F7F8FA'}
            />
        </HeaderContainer>
    )
}