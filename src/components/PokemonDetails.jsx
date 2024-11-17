import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonById, getDescriptions } from '../services/pokeAPI';
import {
    Container, PokemonImage, Title, TypesContainer, Type, DetailsList, DetailItem, CardDetails,
    ButtonGroup, Button, DescriptionItem, MoveNameDescription, TitleInfo, ReturnImg, ButtonReturn
} from '../styles/style-pokemon-details';
import LoadingSpinner from './Spinner';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/NightsStay';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EnglishFlagIcon from '../assets/icons/en.png';
import PortugueseFlagIcon from '../assets/icons/pt.png';
import lightArrow from '../assets/icons/light-theme.svg';
import darkArrow from '../assets/icons/dark-theme.svg';
import { BurguerButton } from '../styles/style-burguer-button';
import { useTheme } from '../hooks/useTheme';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from 'react-i18next';
import { StyledDrawer } from '../styles/style-burguer-button';





export const PokemonDetails = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const { toggleAudio } = useAudio();
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('abilities');
    const [abilityDescriptions, setAbilityDescriptions] = useState([]);
    const [moveDescriptions, setMoveDescriptions] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };



    useEffect(() => {
        const fetchPokemonDetails = async () => {
            setIsLoading(true);
            try {
                const data = await getPokemonById(id);
                setPokemon(data);
                const { abilitiesWithDescriptions, movesWithDescriptions } = await getDescriptions(data.abilities, data.moves);
                setAbilityDescriptions(abilitiesWithDescriptions);
                setMoveDescriptions(movesWithDescriptions);
            } catch (error) {
                console.error("Erro ao buscar detalhes do Pokémon:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id, i18n.language]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!pokemon) {
        return <p>{t('not_found')}</p>;
    }

    return (
        <Container>
            {/* Ícone de Menu para abrir o Drawer */}
            <BurguerButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ fontSize: '2.5em' }} />
            </BurguerButton>

            {/* Drawer contendo as opções de configuração */}
            <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button onClick={toggleTheme}>
                        <ListItemIcon>{isDarkTheme ? <MoonIcon /> : <SunIcon />}</ListItemIcon>
                        <ListItemText primary={isDarkTheme ? "Dark Theme" : "Light Theme"} />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeLanguage('en')}>
                        <ListItemIcon><img src={EnglishFlagIcon} alt="English" width={24} height={24} /></ListItemIcon>
                        <ListItemText primary="English" />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeLanguage('pt')}>
                        <ListItemIcon><img src={PortugueseFlagIcon} alt="Português" width={24} height={24} /></ListItemIcon>
                        <ListItemText primary="Português" />
                    </ListItem>

                    <ListItem button onClick={toggleAudio}>
                        <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                        <ListItemText primary={t("Song")} />
                    </ListItem>
                </List>
            </StyledDrawer>

            {/* Botão de voltar */}
            <ButtonReturn onClick={handleGoBack}>
                <ReturnImg src={isDarkTheme ? lightArrow : darkArrow} alt="Return" />
                
            </ButtonReturn>

            {/* Detalhes do Pokémon */}
            <CardDetails>
                <Title>{pokemon.name}</Title>
                <PokemonImage
                    src={
                        pokemon.sprites?.other.dream_world.front_default ||
                        pokemon.sprites?.other.home.front_default ||
                        pokemon.sprites?.other["official-artwork"].front_default
                    }
                    alt={`Imagem de ${pokemon.name}`}
                />
                <TypesContainer>
                    {pokemon.types.map((type) => (
                        <Type key={type.type.name}>{t('pokemonTypes:' + type.type.name)}</Type>
                    ))}
                </TypesContainer>

                <ButtonGroup>
                    <Button onClick={() => setActiveTab('abilities')} active={activeTab === 'abilities' ? 'true' : 'false'}>
                        {t('abilities')}
                    </Button>
                    <Button onClick={() => setActiveTab('moves')} active={activeTab === 'moves' ? 'true' : 'false'}>
                        {t('moves')}
                    </Button>
                </ButtonGroup>

                {activeTab === 'abilities' ? (
                    <DetailsList>
                        <DetailItem>
                            <TitleInfo>{t('abilities_title')}</TitleInfo>
                            <ul>
                                {pokemon.abilities.map((ability) => {
                                    const abilityDetail = abilityDescriptions.find(desc => desc.name === ability.ability.name);
                                    return (
                                        <DescriptionItem key={ability.ability.name}>
                                            <MoveNameDescription>{ability.ability.name}</MoveNameDescription> - {abilityDetail ? abilityDetail.description : t('loading')}
                                        </DescriptionItem>
                                    );
                                })}
                            </ul>
                        </DetailItem>
                    </DetailsList>
                ) : (
                    <DetailsList>
                        <DetailItem>
                            <TitleInfo>{t('moves_title')}</TitleInfo>
                            <ul>
                                {pokemon.moves.slice(0, 7).map((move) => {
                                    const moveDetail = moveDescriptions.find(desc => desc.name === move.move.name);
                                    return (
                                        <DescriptionItem key={move.move.name}>
                                            <MoveNameDescription>{move.move.name}</MoveNameDescription> - {moveDetail ? moveDetail.description : t('loading')}
                                        </DescriptionItem>
                                    );
                                })}
                            </ul>
                        </DetailItem>
                    </DetailsList>
                )}
            </CardDetails>
        </Container>
    );
};

export default PokemonDetails;


