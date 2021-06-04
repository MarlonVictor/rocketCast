import { createContext, ReactNode, useState } from "react";


interface Episode {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

interface PlayerContextData {
    episodeList: Array<Episode>;
    currentEpisodeIndex: number;
    isOpened: boolean;
    isPlaying: boolean;
    play(episode: Episode): void;
    playList(list: Episode[], index: number): void;
    togglePlay(): void;
    setPlayingState(state: boolean): void;
}

interface PlayerContextProviderProps {
    children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [isOpened, setIsOpened] = useState(false)
    const [episodeList, setEpisodeList] = useState([])
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    function play(episode: Episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsOpened(true)
        setIsPlaying(true)
    }

    function playList(list: Episode[], index: number) {
        setEpisodeList(list)
        setCurrentEpisodeIndex(index)
        setIsOpened(true)
        setIsPlaying(true)
    }

    function togglePlay() {
        setIsPlaying(!isPlaying)
    }

    function setPlayingState(state: boolean) {
        setIsPlaying(state)
    }

    return (
        <PlayerContext.Provider 
            value = {{ 
                isOpened,
                episodeList,
                currentEpisodeIndex,
                isPlaying,
                play,
                playList,
                togglePlay,
                setPlayingState,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}