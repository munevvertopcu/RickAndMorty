import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './Pagination.style'

const Pagination = ({ currentPage, totalPages, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <View style={styles.container}>
            <Button
                title="Önceki"
                onPress={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {
                pageNumbers.map((button) => {
                    return (
                        <TouchableOpacity
                            onPress={() => paginate(button)}
                            style={currentPage === button ? styles.selectedButton : styles.unselectedButton}
                        >
                            <Text>{button}</Text>
                        </TouchableOpacity>
                    )
                }
                )}
            <Button
                title="Sonraki"
                onPress={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </View>
    );
};
export default Pagination;