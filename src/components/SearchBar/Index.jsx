
import PropTypes from 'prop-types';
import { SearchContainer, Search, SearchIcon } from "../Home/style";
import searchIcon from "../../assets/icons/lupa.svg";
import { useTranslation } from 'react-i18next';

const SearchBar = ({ query, setQuery, handleSearch, handleKeyPress}) => {
    const { t } = useTranslation(); 

    return ( 
        <SearchContainer>
            <Search
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("Search for Name or Number")} 
            />
            <SearchIcon src={searchIcon} alt="Buscar" onClick={handleSearch} />
        </SearchContainer>
    );
};

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
};

export default SearchBar;