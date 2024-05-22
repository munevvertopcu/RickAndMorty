import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import EpisodeList from './src/pages/EpisodeList';
import EpisodeDetail from './src/pages/EpisodeDetail';
import FavoritedCharacters from './src/pages/FavoritedCharacters';
import CharacterDetail from './src/pages/CharacterDetail';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="EpisodeList" component={EpisodeList} options={{ headerShown: false }} />
          <AppStack.Screen name="EpisodeDetail" component={EpisodeDetail} options={{ headerShown: false }} />
          <AppStack.Screen name="FavoritedCharacters" component={FavoritedCharacters} options={{ headerShown: false }} />
          <AppStack.Screen name="CharacterDetail" component={CharacterDetail} options={{ headerShown: false }} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


