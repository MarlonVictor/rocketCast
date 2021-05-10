import { createContext, ReactNode, useState } from "react";


interface PlayerContextData {
    isOpened: boolean;
    toggleIsOpened(): void;
}

interface PlayerContextProviderProps {
    children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened() {
        setIsOpened(!isOpened)
    }

    return (
        <PlayerContext.Provider value={{ isOpened, toggleIsOpened }}>
            {children}
        </PlayerContext.Provider>
    )
}