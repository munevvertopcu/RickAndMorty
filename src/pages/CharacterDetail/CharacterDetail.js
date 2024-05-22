import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './CharacterDetail.style'

const CharacterDetail = ({ route }) => {

    const { characterId } = route.params;
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data));
    }, [characterId]);

    return (
        <View style={styles.container}>
            <View style={styles.characterContainer}>
                <Image source={{ uri: character.image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text style={styles.detail}>Tür: {character.species}</Text>
                    <Text style={styles.detail}>Durum: {character.status}</Text>
                    <Text style={styles.detail}>Cinsiyet: {character.gender}</Text>
                    {
                        character.type ?
                            <Text style={styles.detail}>Tip: {character.type}</Text>
                            : null
                    }
                </View>
            </View>
        </View>
    );
};

export default CharacterDetail; 