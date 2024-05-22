import { View, TouchableOpacity, Image, Text, Platform } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import styles from './CharacterCard.style';

const CharacterCard = ({ data, handleLike, navigation }) => {

    const favoriteIds = useSelector((state) => state.favorite.ids);
    const isFavorite = favoriteIds.some((item) => item.id === data.id);

    return (
        <View style={Platform.OS == 'ios' ? styles.characterCardIos : styles.characterCardAndroid}>
            <TouchableOpacity
                onPress={() => navigation.navigate('CharacterDetail',{ characterId: data.id } )}
            >
                <Image
                    source={{ uri: data.image }}
                    style={styles.characterImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleLike(data)}
                style={styles.favoriteButton}
            >
                {
                    isFavorite ?
                        <MaterialIcons name="favorite" size={24} color="black" />
                        : <MaterialIcons name="favorite-border" size={24} color="black" />
                }
                <Text
                    style={styles.favoriteText}>Beğen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CharacterCard; 