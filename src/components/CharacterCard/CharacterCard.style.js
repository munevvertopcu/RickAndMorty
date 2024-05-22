import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        characterCardIos: {
            backgroundColor: "#eee",
            borderRadius: 8,
            padding: 16,
            alignItems: "center",
            marginBottom: 16,
            borderWidth: 1,
            marginHorizontal: 25,
            shadowColor: "#808080",
            shadowOpacity: 0.9,
            shadowRadius: 1,
            shadowOffset: {
                height: 5,
                width: 5
            },
        },
        characterCardAndroid: {
            backgroundColor: "#eee",
            borderRadius: 8,
            padding: 16,
            alignItems: "center",
            marginBottom: 16,
            borderWidth: 1,
            marginHorizontal: 20,
            shadowColor: "black",
            shadowOffset: {
                width: 6,
                height: 6,
            },
            elevation: 9,
        },
        characterImage: {
            width: 250,
            height: 200,
            borderRadius: 10,
            marginBottom: 8,
        },
        favoriteText: {
            fontSize: 16,
            marginLeft: 5
        },
        favoriteButton: {
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "center",
        }
    }
);