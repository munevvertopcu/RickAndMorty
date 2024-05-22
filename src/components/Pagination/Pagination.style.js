import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
        },
        selectedButton: {
            borderWidth: 3,
            borderColor: "grey",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 8,
            marginVertical: 5,
            marginHorizontal: 1
        },
        unselectedButton: {
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 8,
            marginVertical: 5,
            marginHorizontal: 1
        }
    }
);