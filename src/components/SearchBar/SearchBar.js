import { View, TextInput } from 'react-native';
import React from 'react';
import styles from './SearchBar.style';

const SearchBar = ({onChange, title}) => {
    return (
        <View>
            <TextInput
                style={styles.input} placeholder={title}
                 onChangeText={onChange}
            >
            </TextInput>
        </View>
    );
};

export default SearchBar; 