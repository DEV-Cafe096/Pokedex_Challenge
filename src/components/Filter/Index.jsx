import PropTypes from "prop-types";
import { DropdownContainer, Select, Option } from "../Home/style";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Filter = ({
    selectedType,
    handleTypeChange,
    pokemonTypes,
    currentLanguage,
}) => {
    const { t } = useTranslation();

    useEffect(() => {
        // console.log(pokemonTypes);
        
    // Este useEffect será executado quando o idioma ou os pokemonTypes mudarem
    }, [currentLanguage, pokemonTypes]);

    

    return (
    <DropdownContainer>
        <Select onChange={handleTypeChange} value={selectedType}>
        <Option value="">{t("attributes")}</Option>
        {pokemonTypes.map((type) => (
            <Option key={type} value={type}>
            {t(`${type}`)}
            </Option>
        ))}
        </Select>
    </DropdownContainer>
    );
};

Filter.propTypes = {
    selectedType: PropTypes.string.isRequired,
    handleTypeChange: PropTypes.func.isRequired,
    pokemonTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentLanguage: PropTypes.string.isRequired,
};

export default Filter;
