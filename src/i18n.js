// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../src/locales/en/translation.json";
import translationPT from "../src/locales/pt/translation.json";
import pokemonTypesEN from "../src/locales/en/pokemonTypes.json";
import pokemonTypesPT from "../src/locales/pt/pokemonTypes.json";

const resources = {
    en: {
        translation: translationEN,
        pokemonTypes: pokemonTypesEN,
    },

    pt: {
        translation: translationPT,
        pokemonTypes: pokemonTypesPT,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;