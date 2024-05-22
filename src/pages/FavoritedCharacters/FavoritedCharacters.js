import { View, FlatList, Image, Text, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from '../../redux/favoriteSlice';
import styles from './FavoritedCharacters.style'

const FavoritedCharacters = () => {

    const favoriteIds = useSelector((state) => state.favorite.ids);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.characterContainer} key={item.id}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Button
                    title="Sil"
                    onPress={toggleOverlay}
                />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text>{item.name} isimli karakteri favorilerden silmek istediğinize emin misiniz? </Text>
                    <Button
                        title="Evet"
                        onPress={() => dispatch(removeFavorite(item))}
                    />
                </Overlay>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            {
                favoriteIds.length > 0 ?
                    (
                        <FlatList
                            data={favoriteIds}
                            renderItem={renderItem}
                        />
                    ) :
                    <Text style={styles.noCharactersText}>Henüz beğenilen bir karakter yok</Text>
            }
        </View>
    );
};

export default FavoritedCharacters; 