import {
    Container, PokemonImage, Title, TypesContainer, Type, DetailsList, DetailItem, CardDetails,
    ButtonGroup, Button, DescriptionItem, MoveNameDescription, TitleInfo, ReturnImg, ButtonReturn
} from '../styles/style-pokemon-details';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/NightsStay';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { BurguerButton } from '../styles/style-burguer-button';
import { StyledDrawer } from '../styles/style-burguer-button';
import PropTypes from 'prop-types';

const PokemonDetailsRender = ({
    isDarkTheme, toggleTheme, toggleAudio, handleChangeLanguage, t, pokemon,
    handleGoBack, activeTab, setActiveTab, abilityDescriptions, moveDescriptions,
    isDrawerOpen, toggleDrawer
}) => {
    return (
        <Container>
            <BurguerButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ fontSize: '2.5em' }} />
            </BurguerButton>

            <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button onClick={toggleTheme}>
                        <ListItemIcon>{isDarkTheme ? <MoonIcon /> : <SunIcon />}</ListItemIcon>
                        <ListItemText primary={isDarkTheme ? "Dark Theme" : "Light Theme"} />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeLanguage('en')}>
                        <ListItemIcon><img src="/path/to/english.png" alt="English" width={24} height={24} /></ListItemIcon>
                        <ListItemText primary="English" />
                    </ListItem>

                    <ListItem button onClick={() => handleChangeLanguage('pt')}>
                        <ListItemIcon><img src="/path/to/portuguese.png" alt="Português" width={24} height={24} /></ListItemIcon>
                        <ListItemText primary="Português" />
                    </ListItem>

                    <ListItem button onClick={toggleAudio}>
                        <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                        <ListItemText primary={t("Song")} />
                    </ListItem>
                </List>
            </StyledDrawer>

            <ButtonReturn onClick={handleGoBack}>
                <ReturnImg src={isDarkTheme ? '/path/to/light-arrow.svg' : '/path/to/dark-arrow.svg'} alt="Return" />
            </ButtonReturn>

            <CardDetails>
                <Title>{pokemon.name}</Title>
                <PokemonImage src={pokemon.sprites?.other["official-artwork"].front_default} alt={`Imagem de ${pokemon.name}`} />
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

export default PokemonDetailsRender;


PokemonDetailsRender.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    toggleAudio: PropTypes.func.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    abilityDescriptions: PropTypes.array.isRequired,
    moveDescriptions: PropTypes.array.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
};

