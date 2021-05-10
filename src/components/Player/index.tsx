import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiRepeat } from 'react-icons/bi';

import { PlayerContainer, EmptyPlayer, ProgressContainer, ButtonContainer } from './styles';


export function Player() {
    const { isOpened } = useContext(PlayerContext)

    return (
        <PlayerContainer className={!isOpened && 'isClosed'}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            <EmptyPlayer>
                <strong>Selecione um podcast para ouvir</strong>
            </EmptyPlayer>

            <footer className="empty">
                <ProgressContainer>
                    <span>00.00</span>

                    <div className="slider">
                        <div className="emptySlider" />
                    </div>

                    <span>00.00</span>
                </ProgressContainer>

                <ButtonContainer>
                    <button type="button" className="side">
                        <BiShuffle />
                    </button>
                    <button type="button" className="main">
                        <BiSkipPrevious />
                    </button>
                    <button type="button" className="main playBtn">
                        <BiPlay />
                    </button>
                    <button type="button" className="main">
                        <BiSkipNext />
                    </button>
                    <button type="button" className="side">
                        <BiRepeat />
                    </button>
                </ButtonContainer>
            </footer>
        </PlayerContainer>
    )
}