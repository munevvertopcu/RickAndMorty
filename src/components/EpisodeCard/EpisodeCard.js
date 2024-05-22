import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';
import styles from './EpisodeCard.style';

function EpisodeCard({ data, navigation }) {

    return (
        <TouchableOpacity
            style={Platform.OS == 'ios' ? styles.containerIos : styles.containerAndroid}
            onPress={() => navigation.navigate('EpisodeDetail', { episodeId: data.id })}
        >
            <Text style={styles.title}>
                <Text style={styles.text}> Bölüm Adı: </Text>
                <Text>{data.name}</Text>
            </Text>
            <Text style={styles.title}>
                <Text style={styles.text}> Yayın Tarihi: </Text>
                <Text>{data.air_date}</Text>
            </Text>
            <Text style={styles.title}>
                <Text style={styles.text}> Bölüm: </Text>
                <Text>{data.episode}</Text>
            </Text>
        </TouchableOpacity>
    )
}

export default EpisodeCard;