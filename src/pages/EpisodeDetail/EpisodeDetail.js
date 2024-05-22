import { View, FlatList, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavorite } from '../../redux/favoriteSlice';
import styles from './EpisodeDetail.style';
import SearchBar from '../../components/SearchBar';
import CharacterCard from '../../components/CharacterCard';

const EpisodeDetail = ({ route, navigation }) => {
    const { episodeId } = route.params;
    const [episode, setEpisode] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [searchedData, setSearchedData] = React.useState([]);

    const favoriteIds = useSelector((state) => state.favorite.ids);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
            .then((response) => response.json())
            .then((data) => {
                setEpisode(data);
                setCharacters(data.characters);
            });
    }, [episodeId]);

    useEffect(() => {
        const fetchImages = async () => {
            const characterPromises = characters.map((url) => {
                return fetch(url).then((response) => response.json());
            });
            const fetchedCharacters = await Promise.all(characterPromises);
            setCharacters(fetchedCharacters);
        };
        if (characters.length > 0) {
            fetchImages();
        }
    }, [characters]);

    const handleLike = (item) => {
        const isFavorite = favoriteIds.some((data) => data.id === item.id);

        if (isFavorite) {
            dispatch(removeFavorite(item))
        } else {
            if(favoriteIds.length >= 10) {
                alert(
                    "En fazla 10 karakteri favorilere ekleyebilirsiniz."
                  );
            } else {
                dispatch(addFavourite(item))
            }
        }
    };

    const handleSearch = (text) => {
        const filteredList = characters.filter(character => {
            const searchedText = text.toLowerCase()
            const itemData = character.name.toLowerCase()
            return itemData.indexOf(searchedText) > -1
        })
        setSearchedData(filteredList);
    }

    const renderItem = ({ item }) => {
        return (
            <CharacterCard data={item} handleLike={handleLike} navigation={navigation} />
        )
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.navigate('FavoritedCharacters')}
                title="Favori karakterler sayfasına git"
            />
            <SearchBar onChange={handleSearch} title="Karakter İsmi Ara..." />
            <Text style={styles.title}>
                <Text style={styles.text}> Bölüm Adı: </Text>
                <Text>{episode.name}</Text>
            </Text>
            <Text style={styles.title}>
                <Text style={styles.text}> Yayın Tarihi: </Text>
                <Text>{episode.air_date}</Text>
            </Text>
            <Text style={styles.title}>
                <Text style={styles.text}> Bölüm: </Text>
                <Text>{episode.episode}</Text>
            </Text>
            <Text style={[styles.text, { marginBottom: 5, fontSize: 16 }]}>Karakterler:</Text>
            <FlatList
                data={searchedData.length > 0 ? searchedData : characters}
                renderItem={renderItem}
            />
        </View>
    );
};

export default EpisodeDetail; 