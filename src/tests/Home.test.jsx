// Home.test.jsx
import { render, screen } from '@testing-library/react';
import Home from '../components/Home'; // ajuste o caminho conforme necessário
import { ThemeProvider } from '../context/ThemeContext'; // ajuste o caminho conforme necessário
import { AudioProvider } from '../context/AudioContext'; // ajuste o caminho conforme necessário
import { describe, test, expect } from '@jest/globals';


describe('Home Component', () => {
    test('deve renderizar o componente Home', () => {
        render(
            <ThemeProvider>
                <AudioProvider>
                    <Home />
                </AudioProvider>
            </ThemeProvider>
        );

        // Verifique se o título principal da página está presente (exemplo)
        const titleElement = screen.getByText(/Pokédex/i);
        expect(titleElement).toBeInTheDocument();

        // Verifique se algum botão ou elemento específico está sendo renderizado
        const startButton = screen.getByRole('button', { name: /Iniciar/i });
        expect(startButton).toBeInTheDocument();
    });

    // Adicione outros testes conforme necessário
});
