import React, {useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';

/**
 * Componente de barra de búsqueda.
 * 
 * @param {string} value - El valor actual de la barra de búsqueda.
 * @param {function} onChangeText - Función que se ejecuta cuando el texto de la barra de búsqueda cambia.
 * @param {function} onSearch - Función que se ejecuta cuando se presiona la tecla Enter en la barra de búsqueda.
 * @returns {JSX.Element} - Elemento JSX que representa la barra de búsqueda.
 */
const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleKeyPress = (text) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <TextInput
            placeholder="Producto..."
            multiline={false}
            onChangeText={handleKeyPress}
            style={styles.searchBar}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default SearchBar;