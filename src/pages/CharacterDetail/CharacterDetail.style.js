import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#eee',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            flexDirection: 'column',
        },
        characterContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#39434A',
            borderRadius: 10,
            padding: 16,
            width: '90%',
        },
        image: {
            width: 250,
            height: 200,
            borderRadius: 25,
            marginRight: 16,
        },
        textContainer: {
            alignItems: 'center',

        },
        name: {
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 8,
        },
        detail: {
            fontSize: 16,
            marginBottom: 4,
        },
    }
);