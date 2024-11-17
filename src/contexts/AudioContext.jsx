// contexts/AudioContext.js
import { createContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import backgroundMusic from '../assets/sounds/Spirited Away.mp3';

// Criação do contexto
export const AudioContext = createContext();

// Componente AudioProvider
const AudioProvider = ({ children }) => {
    const audioRef = useRef(new Audio(backgroundMusic));
    const isPlaying = useRef(false);

    const playAudio = () => {
        if (!isPlaying.current) {
            audioRef.current.loop = true; // Loop a música
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tentar tocar a música:", error);
            });
            isPlaying.current = true; // Marcar como tocando
        }
    };

    const pauseAudio = () => {
        if (isPlaying.current) {
            audioRef.current.pause(); // Pausar a música
            isPlaying.current = false; // Marcar como não tocando
        }
    };

    const toggleAudio = () => {
        if (isPlaying.current) {
            pauseAudio();
        } else {
            playAudio();
        }
    };

    useEffect(() => {
        // Não precisa de cleanup aqui, a música deve continuar tocando
        return () => {};
    }, []);

    return (
        <AudioContext.Provider value={{ audioRef, toggleAudio }}>
            {children}
        </AudioContext.Provider>
    );
};

AudioProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AudioProvider;
