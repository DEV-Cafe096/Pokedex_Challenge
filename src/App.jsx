import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PokemonDetails } from "./components/PokemonDetails";
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
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </AudioProvider>
  );
}

export default App;
