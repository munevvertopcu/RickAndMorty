import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#EEE',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 16,
          },
          characterContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#39434A',
            borderRadius: 5,
            padding: 8,
            marginVertical: 8,
            borderWidht: 1
          },
          image: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 16,
          },
          name: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          noCharactersText: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
    }
);