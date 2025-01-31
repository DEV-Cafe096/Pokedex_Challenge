import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PokemonDetails } from "./components/PokemonDetails/Index";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import AudioProvider from "./contexts/AudioContext";
import "./i18n";
function App() {
  return (
    <AudioProvider>
      <ThemeContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </AudioProvider>
  );
}

export default App;
