import styled from 'styled-components';


export const EpisodeContainer = styled.div`
    overflow-y: auto;
    position: relative;

    min-height: calc(100vh - 5rem);

   section {
        position: absolute;
        left: 0;
        right: 0;
        max-width: 45rem;

        margin: 0 auto;
        padding: 3rem 2rem 1rem;

        @media(max-width: 1190px) {
            padding-bottom: 12rem;
        }
   }

    .thumbnail {
        position: relative;

        img {
            width: 100%;
            height: 160px;

            border-radius: 0.879rem;
            object-fit: cover;
        }

        button {
            position: absolute;
            width: 3rem;
            height: 3rem;

            color: #fff;
            font-size: 2.2rem;
            z-index: 5;

            border-radius: 0.879rem;
            border: 0;

            transition: filter .3s;
           
            &:first-child {
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);

                background: var(--purple-800);

                svg {
                    position: absolute;
                    transform: translate(-55%, -50%);
                }

            }

            &:last-child {
                right: 0;
                top: 50%;
                transform: translate(50%, -50%);

                background: var(--pink-500);

                svg {
                    position: absolute;
                    transform: translate(-45%, -50%);
                }
            }

            &:hover {
                filter: brightness(0.9);
            }   
        }
    }

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-100);

        h1 {
            margin: 2rem 0 1.5rem;

            @media(max-width: 425px) {
                font-size: 1.5rem;
            }
        }

        span {
            display: inline-block;
            font-size: 0.879rem;

            & + span {
                position: relative;
                margin-left: 1rem;
                padding-left: 1rem;

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

                @media(max-width: 425px) {
                    display: none;
                }
            }
        }
    }

    .description {
        margin-top: 2rem;
        padding-bottom: 5rem;

        line-height: 1.6rem;
        color: var(--gray-800);

        p {
            margin: 1.5rem 0;
        }
    }
`