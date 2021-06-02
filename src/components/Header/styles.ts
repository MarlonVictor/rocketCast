import styled from 'styled-components';


export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme.card};
    height: 5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid ${({ theme }) => theme.border};
    

    &.PlayerOpened {
        @media(min-width: 1190px) {
            max-width: calc(100vw - 25rem);
        }
    }

    p {
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid ${({ theme }) => theme.border};
    }

    span {
        margin-left: auto;
        text-transform: capitalize;
    }

    .switch {
        margin-left: 2rem;
    }

    @media(max-width: 768px) {
        padding: 2rem 2rem;

        p {
            display: none;
        }
    }
    @media(max-width: 425px) {
        justify-content: space-between;
        
        span {
            display: none;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    h2 {
        margin-left: 1rem;
        pointer-events: none;
    }
`