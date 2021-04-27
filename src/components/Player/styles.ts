import styled from 'styled-components';


export const PlayerContainer = styled.div`
    width: 25rem;
    height: 100vh;
    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    color: var(--white);
    background: var(--purple-900);

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
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
        width: 100vw;
        height: 14rem;
        padding: 1rem 4rem;

        position: absolute;
        bottom: 0;
    }

    @media(max-width: 425px) {
        padding: 1rem 1.5rem;
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
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
        background: transparent;
        border: 0;
        font-size: 1.3rem;
        
        &.main {
            font-size: 2rem;
        }

        &.playBtn {
            width: 4rem;
            height: 4rem;
            
            border-radius: 1rem;
            background: var(--purple-800);
        }
    }

    @media(max-width: 1190px) {
        margin-top: 1rem;
    }
`