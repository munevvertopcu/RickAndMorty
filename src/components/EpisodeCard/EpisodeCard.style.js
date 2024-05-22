import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        containerIos: {
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginBottom: 25,
            shadowColor: "#808080",
            shadowOpacity: 0.9,
            shadowRadius: 1,
            shadowOffset: {
                height: 5,
                width: 5
            },
            borderRadius: 5
        },
        containerAndroid: {
            backgroundColor: '#fff',
            marginHorizontal: 25,
            marginBottom: 25,
            shadowColor: "black",
            shadowOffset: {
                width: 6,
                height: 6,
            },
            elevation: 9,
            borderRadius: 5
        },
        title: {
            textAlign: 'center',
            margin: 5
        },
        text: {
            fontWeight: "bold"
        }
    }
);