import styled from 'styled-components';


export const PlayerContainer = styled.div`
    width: 25rem;
    height: 100vh;
    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    right: 0;

    color: var(--white);
    background: var(--purple-900);

    &.isClosed {
        display: none;
    }

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        @media(max-width: 1191px) {
            display: none;
        }
    }

    strong {
        font-family: Lexend, sans-serif;
    }

    footer {
        align-self: stretch;

        &.empty {
            opacity: 0.5;
        }
    }

    @media(max-width: 1190px) {
        display: flex !important;
        justify-content: center;
        width: 100vw;
        height: auto;
        padding: 2rem 4rem;

        position: fixed;
        bottom: 0;
    }

    @media(max-width: 425px) {
        padding: 1rem 1.5rem;
    }
`

export const PlayingEpisode = styled.div`
    text-align: center;
    
    img {
        border-radius: 1.5rem;

        @media(max-width: 1191px) {
            position: absolute;
            bottom: -600px;
        }
    }

    strong {
        display: block;
        margin-top: 1.5rem;
        font: 600 1.1rem Lexend, sans-serif;

        @media(max-width: 1191px) {
            margin-top: -1rem;
        }

        @media(max-width: 375px) {
            font-size: 1rem;
        }
    }

    span {
        display: block;
        margin-top: 1rem;
        opacity: 0.6;
        font-size: 0.85rem;

        @media(max-width: 1191px) {
            margin-bottom: 2rem;
        }
    }
`

export const EmptyPlayer = styled.div`
    width: 100%;
    height: 17rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    border: 1.5px dashed var(--purple-800);
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, var(--purple-800) 0%, transparent 100%);

    @media(max-width: 1190px) {
        display: none;
    }
`

export const ProgressContainer = styled.div`
    display: flex;
    align-items: center;

    font-size: 0.8rem;

    span {
        display: inline-block;
        width: 4rem;

        text-align: center;
        color: var(--gray-200);

        &:first-child {
            transform: translateX(-5px);
        }
        &:last-child {
            transform: translateX(5px);
        }
    }

    .slider {
        flex: 1;

        .emptySlider {
            width: 100%;
            height: 4px;

            background: var(--pink-500);
            border-radius: 2px;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1.5rem;

    button {
        position: relative;
        background: transparent;
        border: 0;
        font-size: 1.3rem;

        transition: filter 0.3s;

        svg {
            position: absolute;
            top: 50%;
            transform: translate(-45%, -50%);

            color: #DDD;
        }

        &:disabled {
            cursor: default;
            filter: brightness(0.5);
        }

        &:hover:not(:disabled) {
            filter: brightness(0.7);
        }

        &.isActive svg {
            color: var(--pink-400);
        }

        &.side {
            margin: 0 20px;
        }
        
        &.main {
            font-size: 2rem;
            margin: 0 5px;
        }

        &.playBtn {
            width: 4rem;
            height: 3.5rem;
            
            border-radius: 1rem;
            background: var(--purple-800);

            &:hover:not(:disabled) {
                filter: brightness(0.9);
            }

            @media(max-width: 1190px) {
                width: 3.8rem;
            }
        }
    }

    @media(max-width: 1190px) {
        margin-top: 1rem;
    }
`