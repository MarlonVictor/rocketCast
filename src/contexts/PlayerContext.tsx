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
    play(episode: Episode): void;
}

interface PlayerContextProviderProps {
    children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [isOpened, setIsOpened] = useState(false)
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

    function play(episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsOpened(true)
    }

    return (
        <PlayerContext.Provider 
            value = {{ 
                isOpened,
                episodeList,
                currentEpisodeIndex,
                play,
            }}>
            {children}
        </PlayerContext.Provider>
    )
}