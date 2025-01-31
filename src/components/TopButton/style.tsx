import styled from "styled-components";
import { ButtonHTMLAttributes } from 'react';

interface TopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDarkTheme: boolean;
}



export const ButtonStart = styled.button<TopButtonProps>`
    background-color: ${({ theme }) => theme.topBtn};
    color: ${({ theme }) => theme.colorbtnTop};
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px; /* Tamanho do ícone */
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
    
    &:hover {
        background-color: ${({ isDarkTheme }) => (isDarkTheme ? "#666" : "#94A2F5")};
    }

    @media(min-width: 1950px) {
        font-size: 40px;
        padding: 15px;
    }

    @media(max-width: 400px) {
        /* font-size: 20px; */
        /* padding-left: 12px; */
        position: fixed;
        /* bottom: 10px; */
        right: 7px;
        padding: 10px;
        font-size: 18px;

        }
`;


