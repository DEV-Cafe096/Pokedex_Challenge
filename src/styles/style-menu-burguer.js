import { makeStyles } from "@mui/styles";

const useMenuStyles = makeStyles((theme) => ({
    menuButton: {
        position: "absolute",
        top: 10, // Ajuste conforme necessário
        right: 10, // Ajuste conforme necessário
    },
    drawerPaper: {
        backgroundColor: theme.palette.mode === 'dark' ? "#333" : "#f4f4f4", // Cor escura para o modo noturno
        width: 250,
    },
    listItem: {
        color: theme.palette.mode === 'dark' ? "#fff" : "#000", // Ajusta a cor dos textos
    },
    icon: {
        color: theme.palette.mode === 'dark' ? "#fff" : "#000", // Cor dos ícones
    },

    
}));

export default useMenuStyles;
