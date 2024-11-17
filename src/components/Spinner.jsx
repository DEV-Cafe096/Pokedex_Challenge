import styled, { css } from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Faz o spinner ocupar a tela inteira */
`;

const Spinner = styled.div`
    border: 8px solid rgba(255, 255, 255, 0.3); /* Cor do fundo para o tema claro */
    border-radius: 50%;
    width: 60px; /* Largura do spinner */
    height: 60px; /* Altura do spinner */
    animation: spin 1s linear infinite;

    /* Estilos para o tema claro */
    ${({ theme }) => theme === 'light' && css`
        border-top: 8px solid #3498db; /* Cor do topo para o tema claro */
    `}

    /* Estilos para o tema escuro */
    ${({ theme }) => theme === 'dark' && css`
        border-top: 8px solid #1abc9c; /* Cor do topo para o tema escuro */
    `}

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @media(min-width: 1950px) {
        width: 80px; /* Largura do spinner para telas grandes */
        height: 80px; /* Altura do spinner para telas grandes */
    }
`;

const LoadingSpinner = () => {
    const { isDarkTheme } = useTheme(); // Obtenha o estado do tema

    return (
        <SpinnerContainer>
            <Spinner theme={isDarkTheme ? 'dark' : 'light'} />
        </SpinnerContainer>
    );
};

export default LoadingSpinner;
