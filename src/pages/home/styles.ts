import {styled} from "styled-components";

export const Main = styled.main`
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media only screen and (max-width: 500px) {
        background-image: url(${p => p.theme.images.mobile});
    } 
`

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 500px) {
        padding: 1.5rem;
    } 
`

export const MainText = styled.section<{isOpen: boolean}>`
    color: white;

    margin-bottom: ${p => p.isOpen ? "12rem" : "0"};
    transition: margin-bottom 200ms ease;

    h3 {
        font-weight: 400;
        font-size: 4.5vw;
        letter-spacing: 1vw;
    }

    button {
        margin-top: 2rem;
        width: 6rem;
        height: 2rem;
        border-radius: 999rem;
        border: none;
        background-color: white;
        font-weight: 500;
        color: ${p => p.theme.colors.element};
        letter-spacing: .1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem .2rem .5rem 1rem;

        span {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 1.5rem;
            height: 1.5rem;
            background-color: ${p => p.theme.colors.element};
            border-radius: 100%;
            
            transform: rotate(${p => p.isOpen ? "180deg" : "0"});
            transition: transform 100ms ease;
        }
    }
`

export const GreetingMessage = styled.div`
    display: flex;
    h2 {
        margin-left: .5rem;
        font-size: 5vw;
        letter-spacing: .7vw;
        font-weight: 400;
    }
`

export const Hour = styled.section`
    display: flex;
    justify-content: left;
    align-items: baseline;
    
    h1 {
        font-size: 25vw;
        margin: .7rem 0;
    }

    h4 {
        font-weight: 300;
        font-size: .6rem;
    }
`

export const ExtraText = styled.section<{isOpen: boolean}>`
    max-height: ${p => p.isOpen ? "20rem" : "0"};
    transition: max-height 200ms ease;
    padding: ${p => p.isOpen ? "2rem 1.5rem" : "0"};
    width: 100vw;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    color: ${p => p.theme.colors.font};

    background-color: ${p => p.theme.colors.background};
    
    span {
        width: 100%;
        justify-content: space-between;
        display: flex;
        margin-bottom: 3vw;

        h4 {
            font-weight: 300;
            font-size: 4vw;
        }

        h3 {
            font-weight: 500;
            font-size: 5vw;
        }
    }
`