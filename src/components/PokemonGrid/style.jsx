import styled from "styled-components";

export const PokemonList = styled.ul`
    margin-top: 30px;
    display: flex;
    padding: 20px;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PokemonLink = styled.a`
  text-decoration: none; // Remove a decoração do link
`;


export const PokemonCard = styled.div`
     border: 1px solid ${({ theme }) => theme.borderColor}; // Usando a cor da borda do tema
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    transition: ease-in-out 0.5s;
    
    &:hover{
        transform: scale(1.1); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 1); 
        
    }

    @media(min-width: 1950px) {
        width: 400px;
        height: 100%;
    }

    @media(max-width: 768px) {
        /* width: 250px; */
        padding-bottom: 10px;
    }

    @media(max-width: 520px) {
        width: 280px;
        
        
    }

    @media(max-width: 420px) {
        width: 250px;
    }
`;


export const PokemonName = styled.div`
    font-size: 36px;
    /* margin-bottom: 30px; */
    padding-bottom: 30px;
    text-align: center;

`;

export const PokemonImage = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 20px;

    @media(min-width: 1950px) {
        width: 180px;
        height: 180px;
    }

    @media(max-width: 520px) {
        width: 100px;
        height: 100px;
    }

`;


