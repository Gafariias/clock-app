import styled, { keyframes } from "styled-components";

const hoverRotateAnimation = keyframes`
    0% {transform: rotate(0deg)}
    10% {transform: rotate(-45deg)}
    15% {transform: rotate(-45deg)}
    100% {transform: rotate(365deg)}
`

export const Container = styled.section<{isOpen: boolean}>`
    width: 100%;
    max-height: ${p => p.isOpen ? '0' : '100vh'};
    overflow: hidden;
    transition: max-height 200ms ease;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;

    button {
        height: 2rem;
        background: none;
        outline: none;
        border: none;
        margin-left: .5rem;

        &:hover{
            cursor: pointer;
            animation-name: ${hoverRotateAnimation};
            animation-duration: 1s;
        }
    }
`

export const Text = styled.div`
    color: white;
    font-size: 3.4vw;

    blockQuote {
        p {
            line-height: 5.5vw;
            font-weight: 300;
        }
    }

    >p {
        margin-top: .5rem;
        font-weight: bold;
    }
`

export const LoadingBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

