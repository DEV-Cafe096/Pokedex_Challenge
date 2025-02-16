import styled from "styled-components";
import './style.js';



export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    box-shadow: none;
    /* overflow: hidden; */
    
`;


export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled.img`
    position: absolute;
    right: 12px;
    cursor: pointer;
    width: 30px;

    @media(min-width: 1950px) {
        width: 40px;
    }

    @media(max-width: 520px) {
        width: 25px;
    }

    @media(max-width: 420px) {
        width: 20px;
        right: 10px;
    }
`;

export const Search = styled.input` 
    width: 600px;
    height: 45px;
    border-radius: 25px;
    border: 1.5px solid #2A74BA;
    text-align: center;
    font-size: 20px;

    &:focus{
    outline: none;
    }

    @media(min-width: 1950px) {
        width: 900px;
        height: 58px;

        &::placeholder {
        font-size: 22px; 
        font-weight: 500;
    }
    }

    @media(max-width: 768px) {
        width: 500px;
    }

    @media(max-width: 520px) {
        width: 380px;
        font-size: 18px;
    }

    @media(max-width: 420px) {
        width: 300px;
        &::placeholder {
        font-size: 14px; 
        font-weight: 500;
    }
    }

`

export const Logo = styled.img`
    padding: 10px;
    margin-bottom: 20px;
    width: 500px;
    animation: pulse 2s infinite; /* referring directly to the animation's @keyframe declaration */
    filter: saturate(1.5);

    @media(min-width: 1950px) {
        width: 700px;
    }

    @media(max-width: 768px) {
        width: 450px;
    }

    @media(max-width: 520px) {
        width: 380px;
    }

    @media(max-width: 420px) {
        width: 300px;
        padding-top: 20px;
    }

    @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}
`;


export const Button = styled.button`
    padding: 7px 30px;
    font-size: 26px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.buttonShowmore};
    color: ${({ theme }) => theme.text};

    &:hover{
        background-color: ${({ theme }) => theme.buttonHoverBackground}; 
        color: ${({ theme }) => theme.text};
        transition: 0.5s ease-in-out;
    }

    @media(min-width: 1950px) {
        font-size: 40px;
        padding: 10px 40px;
        margin-top: 20px;
    }

    @media(max-width: 520px) {
        font-size: 22px;
        
    }
`;

export const BackButton = styled.button`
    position: fixed; // Mantém o botão fixo na parte inferior
    bottom: 20px; // Distância do fundo da página
    left: 50%; // Para centralizar
    transform: translateX(-50%); // Ajuste para o centro
    background: none;
    border: none;
    cursor: pointer;
    img {
        width: 50px; // Tamanho do ícone de voltar
        height: auto;
    }

    @media(min-width: 1950px) {
        img {
            width: 75px; // Tamanho do ícone de voltar
            height: auto;
        }
    }

    @media(max-width: 768px) {
        padding-top: 30px;
    }
    


`;

// Botão de toggle para tema
export const ThemeToggle = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.text};
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 24px;;


    &:hover{
        background-color: ${({ theme }) => theme.buttonHoverBackground}; // Alterar cor no hover para algo diferente
        color: ${({ theme }) => theme.text};
        transition: 0.3s ease;
    }
`;



export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Select = styled.select`
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.hoverText};
    }

    @media(min-width: 1950px) {
        font-size: 24px;
        padding: 15px 20px;
    }

    @media(max-width: 768px) {

    }
`

export const Option = styled.option`
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;

    &:hover {
        background-color: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.hoverText};
    }
`;


export const ThemeButton = styled.button`
    background: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 10px;

    &:hover {
        transform: scale(1.1); 
    }

    &:disabled {
        opacity: 0.5; 
        cursor: not-allowed; /* Cursor de não permitido */
    }

    img {
        width: 60px;
        height: auto; 
    }
`;


export const ThemeToggleContainer = styled.div`
    display: flex; /* Flex para alinhar os botões lado a lado */
    justify-content: flex-end; /* Alinha os botões à direita */
    position: absolute; /* Para colocá-los no canto superior direito */
    top: 10px; /* Ajuste conforme necessário */
    right: 10px; /* Ajuste conforme necessário */
    z-index: 100; /* Para garantir que fique acima de outros elementos */
`;



export const LanguageSwitcherContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 170px;
    display: flex;
    gap: 10px;
`;


