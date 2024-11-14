import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    list-style: none;
    min-height: 100vh;
    background-position: center;
    justify-content: center;
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    
    `;



export const Title = styled.h1`
    font-size: 58px;
    margin-bottom: 20px;
    text-align: center;

    @media(min-width: 1950px) {
        font-size: 88px;
    }

    @media(max-width: 1200px) {
        font-size: 44px;
    }

    @media(max-width: 768px) {
        font-size: 36px;
    }

    @media(max-width: 570px) {
        font-size: 26px;
    }

    @media(max-width: 400px) {
        font-size: 22px;
        
    }
    `;

export const PokemonImage = styled.img`
    width: 300px;
    height: auto;
    margin-bottom: 20px;

    @media(min-width: 1950px) {
        width: 500px;
    }

    @media(max-width: 1200px) {
        width: 200px;
    }

    @media(max-width: 768px) {
        width: 150px;
    }

    @media(max-width: 570px) {
        width: 120px;
        
    }

    @media(max-width: 400px) {
        width: 100px;        
    }
    `;

export const CardDetails = styled.div`
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    text-align: center;
    opacity: 0.9;
    width: 40%;
    height: auto;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.cardBackground};
    border: 1px solid ${({ theme }) => theme.borderColor}; // Usando a cor da borda do tema


    @media(min-width: 1950px) {
        width: 60%;
    }

    @media(max-width: 1200px) {
        width: 55%;
    }

    @media(max-width: 570px) {
        width: 50%;
        
    }

    @media(max-width: 400px) {
        width: 70%;
    }
`;

export const TypesContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 0px;
    `;

export const Type = styled.span`
    background-color: ${({ theme }) => theme.typeBackground};  // Cor de fundo dinâmica conforme o tema
    padding: 5px 10px;
    border-radius: 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.typeColor};  // Adicionar cor de texto
    font-weight: 600;
    font-size: 26px;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHoverBackground}; 
        transition: 0.3s ease;
    }

    @media(min-width: 1950px) {
        font-size: 50px;
        margin-top: 10px;
    }

    @media(max-width: 1200px) {
        font-size: 20px;
    }

    @media(max-width: 768px) {
        font-size: 16px;
        padding: 5px 10px ;
        margin-bottom: 0px;
    }

    @media(max-width: 400px) {
        font-size: 14px;
        padding: 5px 10px;
        
    }
`;

export const DetailsList = styled.ul`
    list-style: none;
    padding: 0;

    
`;

export const DetailItem = styled.li`
    margin-bottom: 20px; 
    list-style: none;

    h3 {
    margin-bottom: 10px;
    }

    
`;
export const TitleInfo = styled.h3`
    font-size: 28px;


    @media(min-width: 1950px) {
        font-size: 50px;
    }

    @media(max-width: 768px) {
        font-size: 22px;
    }

    @media(max-width: 570px) {
        
    }
`

export const DescriptionItem = styled.li`
    font-size: 20px;  
    line-height: 1.4; 
    color: #333;      
    margin-bottom: 5px; 
    max-width: auto;  
    text-align: center;
    color: ${({ theme }) => theme.text};


        @media(min-width: 1950px) {
            font-size: 40px;
        }

        @media(max-width: 1200px) {
        font-size: 18px;
        
    }
    
    @media(max-width: 768px) {
        font-size: 16px;
        padding: 0 10px;
    }

`;

export const MoveNameDescription = styled.span`
    font-weight: bolder; 
    font-size: 22px;   


    @media(min-width: 1950px) {
        font-size: 46px;
    }

    @media(max-width: 768px) {
        font-size: 18px;
        font-weight: bolder;
    }
`;


// Estilo para o grupo de botões
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
`;

// Estilo para o botão
export const ButtonReturn = styled.div`
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
        
        transition: 0.3s ease;
    }

    @media(min-width: 1950px) {
        img {
            width: 80px;
            height: 80px;
        }
    }

    
`;


export const Button = styled.div`   //abilities and moves
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHoverBackground};
        transition: 0.3s ease;

    }

    @media(min-width: 1950px) {
        font-size: 50px;
        margin-top: 10px;
    }

    @media(max-width: 1200px) {
        font-size: 20px;
    }

    @media(max-width: 768px) {
        font-size: 16px;
        padding: 5px 10px;
    }

    @media(max-width: 400px) {
        font-size: 14px;
        padding: 5px 10px;
        
    }
`;

export const ReturnImg = styled.img`
    width: 50px;
    height: 50px;   
    object-fit: contain;
    transition: ease-in-out 0.3s;
    
    &:hover{
        transform: scale(1.2); 
    }

    @media(max-width: 570px) {
        width: 40px;
        height: 40px;
    }
`

// Estilo para o botão "Habilidades" e "Movimentos"
export const ToggleButton = styled(Button)`
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        
        /* background-color: ${({ active, theme }) => (active ? theme.hoverBackground : theme.inactiveHoverBackground)};
        color: ${({ theme }) => theme.hoverText};  */
    }

    @media(max-width: 768px) {
        font-size: 16px;
        padding: 5px 15px;
    }
`;
