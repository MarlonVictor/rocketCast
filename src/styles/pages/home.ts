import styled, { css } from 'styled-components';


const cssPlayButton = css`
    width: 2rem;
    height: 2rem;

    background: var(--white);
    color: var(--pink-500);
    font-size: 1.5rem;

    border-radius: 0.675rem;
    border: 1px solid var(--gray-100);

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
            color: var(--gray-200);
            
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        padding-bottom: 10px;
        
        list-style: none;
        overflow-x: auto;

        ::-webkit-scrollbar-thumb {
            background: var(--gray-200);
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }
        
        li {
            display: flex;
            align-items: center;
            max-width: 400px;

            position: relative;
            padding: 1rem;

            background: var(--white);
            border: 1px solid var(--gray-100);
            border-radius: 0.5rem;

            @media(max-width: 768px) {
                flex-direction: column;
                max-width: 210px;
            }

            img {
                width: 6rem;
                height: 6rem;

                border-radius: 0.5rem;
                object-fit: cover;

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
                    color: var(--gray-800);
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
                            background: var(--gray-100);
                        }
                    }
                }
            }

            button {
               ${cssPlayButton}

                position: absolute;
                right: 1rem;
                bottom: 1rem;
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
            border-bottom: 1px solid var(--gray-100);
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
                width: 3.5rem;
                height: 3.5rem;

                object-fit: cover;
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