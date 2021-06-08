import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { BiShuffle, BiSkipPrevious, BiPlay, BiPause, BiSkipNext, BiRepeat } from 'react-icons/bi';
import Slider from 'rc-slider';

import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { PlayerContainer, PlayingEpisode, EmptyPlayer, ProgressContainer, ButtonContainer } from './styles';
import 'rc-slider/assets/index.css';


export function Player() {
    const [progress, setProgress] = useState(0)

    const { 
        isOpened,
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasNext,
        hasPrevious,
        setPlayingState,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        playNext, 
        playPrevious,
        clearPlayerState
    } = usePlayer()

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

    function setupProgressListener() {
        audioRef.current.currentTime = 0
        
        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime))
        })
    }
    
    function handleSeek(amount: number) {
        audioRef.current.currentTime = amount
        setProgress(amount)
    }

    function handleEpisodeEnded() {
        if (hasNext) {
            playNext()
        } else {
            clearPlayerState()
        }
    }

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
                <span>{convertDurationToTimeString(progress)}</span>

                    <div className="slider">
                        {episode ? (
                            <Slider 
                                max={episode.duration}
                                value={progress}
                                trackStyle={{ backgroundColor: 'var(--pink-500)'}}
                                railStyle={{ backgroundColor: 'var(--purple-800)'}}
                                handleStyle={{ borderColor: 'var(--pink-500)', borderWidth: 4 }}
                                onChange={handleSeek}
                            />
                        ) : (
                            <div className="emptySlider" />
                        )}
                    </div>

                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </ProgressContainer>

                {episode && (
                    <audio 
                        autoPlay
                        src={episode.url}
                        ref={audioRef}
                        loop={isLooping}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                        onLoadedMetadata={setupProgressListener}
                        onEnded={handleEpisodeEnded}
                    />
                )}

                <ButtonContainer>
                    <button type="button" className={isShuffling ? 'isActive side' : 'side'} disabled={!episode || episodeList.length === 1} onClick={toggleShuffle}>
                        <BiShuffle />
                    </button>
                    <button type="button" className="main" disabled={!episode || !hasPrevious} onClick={playPrevious}>
                        <BiSkipPrevious />
                    </button>
                    <button type="button" className="main playBtn" disabled={!episode} onClick={togglePlay}>
                        {isPlaying ? <BiPause style={{ left: '1.8rem' }} /> : <BiPlay />}
                    </button>
                    <button type="button" className="main" disabled={!episode || !hasNext} onClick={playNext}>
                        <BiSkipNext />
                    </button>
                    <button type="button" className={isLooping ? 'isActive side' : 'side'} disabled={!episode} onClick={toggleLoop}>
                        <BiRepeat />
                    </button>
                </ButtonContainer>
            </footer>
        </PlayerContainer>
    )
}