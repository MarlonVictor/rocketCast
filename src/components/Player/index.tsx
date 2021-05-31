import Image from 'next/image';
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiRepeat } from 'react-icons/bi';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { PlayerContainer, PlayingEpisode, EmptyPlayer, ProgressContainer, ButtonContainer } from './styles';


export function Player() {
    const { isOpened, episodeList, currentEpisodeIndex } = useContext(PlayerContext)

    const episode = episodeList[currentEpisodeIndex]

    return (
        <PlayerContainer className={!isOpened && 'isClosed'}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            {episode ? (
                <PlayingEpisode>
                    <Image
                        width={590}
                        height={590}
                        src={episode.thumbnail}
                        alt="Thumbnail"
                        objectFit="cover"
                    />

                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </PlayingEpisode>
            ) : (
                <EmptyPlayer>
                    <strong>Selecione um podcast para ouvir</strong>
                </EmptyPlayer>
            )}


            <footer className={ !episode ? 'empty' : '' }>
                <ProgressContainer>
                    <span>00.00</span>

                    <div className="slider">
                        {episode ? (
                            <Slider 
                                trackStyle={{ backgroundColor: 'var(--pink-500)'}}
                                railStyle={{ backgroundColor: 'var(--purple-800)'}}
                                handleStyle={{ borderColor: 'var(--pink-500)', borderWidth: 4 }}
                            />
                        ) : (
                            <div className="emptySlider" />
                        )}
                    </div>

                    <span>00.00</span>
                </ProgressContainer>

                <ButtonContainer>
                    <button type="button" className="side" disabled={!episode}>
                        <BiShuffle />
                    </button>
                    <button type="button" className="main" disabled={!episode}>
                        <BiSkipPrevious />
                    </button>
                    <button type="button" className="main playBtn" disabled={!episode}>
                        <BiPlay />
                    </button>
                    <button type="button" className="main" disabled={!episode}>
                        <BiSkipNext />
                    </button>
                    <button type="button" className="side" disabled={!episode}>
                        <BiRepeat />
                    </button>
                </ButtonContainer>
            </footer>
        </PlayerContainer>
    )
}