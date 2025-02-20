declare module '*.jpg';
declare module '*.png';

declare module '../Home/style' {
	import { CSSProperties } from 'react';
	export const DropdownContainer: React.FC;
	export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>>;
	export const Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>;
}


declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.ico" {
    const content: string;
    export default content;
}



declare module "*.png" {
    const content: string;
    export default content;
}

declare module "@mui/icons-material/Menu" {
    import { SvgIconComponent } from "@mui/icons-material";
    const MenuIcon: SvgIconComponent;
    export default MenuIcon;
}

declare module "@mui/icons-material/WbSunny" {
    import { SvgIconComponent } from "@mui/icons-material";
    const SunIcon: SvgIconComponent;
    export default SunIcon;
}

declare module "@mui/icons-material/NightsStay" {
    import { SvgIconComponent } from "@mui/icons-material";
    const MoonIcon: SvgIconComponent;
    export default MoonIcon;
}

declare module "@mui/icons-material/MusicNote" {
    import { SvgIconComponent } from "@mui/icons-material";
    const MusicNoteIcon: SvgIconComponent;
    export default MusicNoteIcon;
}


declare module "@styles/style-burguer-button" {
    export const BurguerButton: any;
    export const StyledDrawer: any;
}


declare module "@i18n" {
    const i18n: any;
    export default i18n;
}


declare module "@components/PokemonGrid/style"{
    export const PokemonList: any;
    export const PokemonLink: any;
    export const PokemonCard: any;
    export const PokemonName: any;
    export const PokemonImage: any;
}

declare module "@services/pokeAPI" {
    export const getPokemons: any;
    export const getPokemonById: any;
    export const getMoveDescription: any;
    export const getAbilityDescription: any;
}

declare module "@hooks/useAudio" {
    export const useAudio: any;
}

declare module "@hooks/useTheme" {
    export const useTheme: any;
}

declare module "@hooks/usePokemon" {
    export const usePokemon: any;
}

declare module '@components/SearchBar/Index';
declare module '@components/Spinner/Index';