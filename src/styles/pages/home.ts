import styled, { css } from 'styled-components';


const cssPlayButton = css`
    width: 2rem;
    height: 2rem;

    background: ${({ theme }) => theme.button};
    color: var(--pink-500);
    font-size: 1.5rem;

    border-radius: 0.675rem;
    border: 1px solid ${({ theme }) => theme.border};

    transition: filter .3s;

    svg {
        position: absolute;
        top: 50%;
        transform: translate(-45%, -50%);
    }

    &:hover {
        filter: brightness(0.95);
    }
`

export const HomeContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;

    padding: 0 4rem;
    height: calc(100vh - 5rem);

    &.PlayerOpened {
        @media(min-width: 1190px) {
            max-width: calc(100vw - 25rem);
        }
    }

    h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }

    @media(max-width: 375px) {
        padding: 0 2rem;
    }
`

export const LatestEpisodes = styled.section`
    position: relative;

    .sliderArrow {
        display: none;

        @media(max-width: 1190px) {
            display: block;
            position: absolute;
            right: -3.5rem;
            top: 85px;

            font-size: 4rem;
            color: ${({ theme }) => theme.border};
            
            z-index: 10;   
        }

        @media(max-width: 768px) {
            top: 140px;
        }

        @media(max-width: 375px) {
            display: none;
        }
    }

    ul {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        padding-bottom: 10px;
        
        list-style: none;
        overflow-x: auto;

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.border};
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }
        
        li {
            display: flex;
            align-items: center;
            width: 100%;
            min-width: 400px;

            position: relative;
            padding: 1rem;

            background: ${({ theme }) => theme.card};
            border: 1px solid ${({ theme }) => theme.border};
            border-radius: 0.5rem;

            @media(max-width: 768px) {
                flex-direction: column;
                min-width: 210px;
            }

            img {
                width: 6rem;
                height: 6rem;

                border-radius: 0.5rem;

                @media(max-width: 768px) {
                    width: 100%;
                }
            }

            .episodeDetails {
                width: 73%;
                margin-left: 1rem;

                @media(max-width: 768px) {
                    width: 100%;
                    margin-top: 1rem;
                }

                a {
                    display: block;

                    font: 600 0.8rem Lexend, sans-serif;
                    color: ${({ theme }) => theme.title};
                    line-height: 1.2rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                p {
                    margin-top: 0.5rem;
                    max-width: 73%;

                    font-size: 0.775rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                span {
                    display: inline-block;
                    margin-top: 0.5rem;

                    font-size: 0.775rem;

                    &:last-child {
                        position: relative;
                        margin-left: 0.5rem;
                        padding-left: 0.5rem;

                        &::before {
                            content: '';
                            width: 4px;
                            height: 4px;

                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(-50%, -50%);

                            border-radius: 2px;
                            background: ${({ theme }) => theme.border};
                        }
                    }
                }
            }

            button {
                position: absolute;
                right: 1rem;
                bottom: 1rem;

                &.playBtn {
                    ${cssPlayButton}
                }

                &.playingBtn {
                    width: 2rem;
                    height: 2rem;

                    background: transparent;
                    color: var(--pink-500);
                    font-size: 2rem;

                    border: none;
                    pointer-events: none;
                }
            }
        }
    }

`

export const AllEpisodes = styled.section`
    padding-bottom: 2rem;

    @media(max-width: 1190px) {
        padding-bottom: 16rem;
    }

    table {
        width: 100%;

        @media(max-width: 768px)  {
            .tableHidden {
                display: none;
            }
        }

        @media(max-width: 425px)  {
            .tableHiddenSecond {
                display: none;
            }
        }
        
        th, td {
            padding: 0.65rem 1rem;
            border-bottom: 1px solid ${({ theme }) => theme.border};
        }

        th {
            color: var(--gray-200);
            font: 500 0.75rem Lexend, sans-serif;
            text-transform: uppercase;
            text-align: left;
        }

        td {
            font-size: 0.875rem;

            @media(max-width: 425px) {
                padding: 0.3rem;
            }

            img {
                min-width: 3.5rem;
                height: 3.5rem;

                border-radius: 0.5rem;
            }

            a {
                font: 600 1rem Lexend, sans-serif;
                line-height: 1.4rem;

                &:hover {
                    text-decoration: underline;
                }

                @media(max-width: 768px) {
                    font-size: 0.8rem;
                }
            }

            button {
                ${cssPlayButton}
                position: relative;
            }
        }
    }
`