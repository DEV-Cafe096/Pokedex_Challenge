// src/components/BackToTopButton.jsx
import { useState, useEffect } from "react";
import { ButtonStart } from "./style";

import { useTheme } from "@hooks/useTheme";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
    const { isDarkTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            // Define visibilidade do botão próximo ao final da página
            if (scrollTop + clientHeight >= scrollHeight - 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Rolagem suave
        });
    };

    return (
        <>
            {isVisible && (
                <ButtonStart
                    onClick={scrollToTop}
                     isDarkTheme={isDarkTheme} // Passa a prop para o estilo
                >
                    <FaArrowUp />
                </ButtonStart>
            )}
        </>
    );
};

export default TopButton;
