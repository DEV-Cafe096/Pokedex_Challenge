import PropTypes from "prop-types";
import { DropdownContainer, Select, Option } from "../Home/style";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface FilterProps {
    selectedType: string;
    handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pokemonTypes: string[];
    currentLanguage: string;
}

const Filter: React.FC<FilterProps> = ({
    selectedType = "",
    handleTypeChange = () => { },
    pokemonTypes = [],
    currentLanguage = "",
}) => {
    const { t } = useTranslation();

    useEffect(() => {
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



export default Filter;
