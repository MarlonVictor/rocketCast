import Image from 'next/image';
import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import { BiShuffle, BiSkipPrevious, BiPlay, BiPause, BiSkipNext, BiRepeat } from 'react-icons/bi';
import Slider from 'rc-slider';

import { PlayerContainer, PlayingEpisode, EmptyPlayer, ProgressContainer, ButtonContainer } from './styles';
import 'rc-slider/assets/index.css';


export function Player() {
    const { isOpened, episodeList, currentEpisodeIndex, isPlaying, togglePlay, setPlayingState } = useContext(PlayerContext)

    const episode = episodeList[currentEpisodeIndex]
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if(!audioRef.current) {
            return
        }
        
        if(isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

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

                {episode && (
                    <audio 
                        autoPlay
                        src={episode.url}
                        ref={audioRef}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                )}

                <ButtonContainer>
                    <button type="button" className="side" disabled={!episode}>
                        <BiShuffle />
                    </button>
                    <button type="button" className="main" disabled={!episode}>
                        <BiSkipPrevious />
                    </button>
                    <button 
                        type="button" 
                        className="main playBtn" 
                        disabled={!episode} 
                        onClick={togglePlay}
                    >
                        {isPlaying ? <BiPause style={{ left: '1.8rem' }} /> : <BiPlay />}
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