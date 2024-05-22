import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from 'react-native';
import Pagination from '../../components/Pagination';
import EpisodeCard from '../../components/EpisodeCard';
import SearchBar from '../../components/SearchBar';
import styles from './EpisodeList.style'

const apiUrl = 'https://rickandmortyapi.com/api/episode';

function EpisodeList(props) {
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [episodeData, setEpisodeData] = useState([]);
    const [searchedData, setSearchedData] = React.useState([]);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${apiUrl}?page=${currentPage}`,);
            const json = await response.json();
            setEpisodeData(json.results);
            setTotalPages(json.info.pages)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const paginate = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    };

    const handleSearch = (text) => {
        const filteredList = episodeData.filter(episode => {
            const searchedText = text.toLowerCase()
            const itemData = episode.name.toLowerCase()
            return itemData.indexOf(searchedText) > -1
        })
        setSearchedData(filteredList);
    }

    const renderItem = ({ item }) => {
        return (
            <EpisodeCard data={item} navigation={props.navigation} />
        )
    };

    return (
        isLoading ? (
            <ActivityIndicator />
        ) :
            (
                <View style={styles.container}>
                    <SearchBar onChange={handleSearch} title="Bölüm Ara..." />
                    <FlatList
                        keyExtractor={(item) => item.id.toString()}
                        data={searchedData.length > 0 ? searchedData : episodeData}
                        renderItem={renderItem}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        paginate={paginate}
                    />
                </View>
            )
    )
}

export default EpisodeList;