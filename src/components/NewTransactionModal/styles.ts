import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        color: var(--text-title);
        margin-bottom: 2rem;

    }

    input {
        background-color: var(--background-box);
        font-size: 1rem;
        font-weight: 400;
        border: 1px solid var(--border-box);

        width: 100%;
        height: 4rem;
        border-radius: 0.25rem;
        padding: 0 1.25rem;

        &::placeholder{
        color: var(--text-body);
        }

        & + input {
        margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        padding: 0 1.25rem;
        margin-top: 1.5rem;
        
        border: 0;
        border-radius: 0.25rem;
        background-color: var(--green);
        color: var(--shape);
        
        font-size: 1rem;
        font-weight: bold;

        transition: filter 0.2s;

        &:hover{
        filter: brightness(0.8);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
}
export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--border-box);
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? '#ccc' : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;
    
    &hover {
        border-color: ${darken(0.1, '#D7D7D7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;