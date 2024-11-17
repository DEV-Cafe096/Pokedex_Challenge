import styled from 'styled-components';
import { Drawer } from '@mui/material';

export const BurguerButton = styled.div`
  background-color: transparent;
  border: none;
  padding: 10px;
  position: fixed; 
  top: 10px; 
  right: 50px;
  cursor: pointer; 

  &:hover {
    transform: scale(1.2); 
  }

  @media(min-width: 1950px) {
    font-size: 18px;
  }
  @media(max-width: 768px) {
    right: 0px;
    top: 0px; 
  }

  @media (max-width: 400px) {
    right: 5px;
    /* padding: 10px; */
    top: 0px;
  }
`;


export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.drawerBackground}; // Usando a cor do tema para o Drawer
    color: ${({ theme }) => theme.text}; // Ajuste de cor do texto conforme o tema
    .MuiTypography-root {
      /* color: #fff;  Cor do texto (branco) */
      font-weight: 400;
      font-family: "Comfortaa";

      @media(max-width: 520px) {
        width: 90px;
        font-size: 13px;
      
    }

    @media(min-width: 1950px) {
      font-size: 30px;
      width: 180px;
      
    }
    }
    
    .MuiListItem-root {
    cursor: pointer; 
    
    &:hover {
        background-color: ${({ theme }) => theme.drawerHover}; // Efeito de fundo ao passar o mouse
        transform: scale(1.05); // Efeito de leve aumento
      }
      
  }
  }


`;

