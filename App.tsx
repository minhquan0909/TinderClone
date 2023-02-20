import React from 'react';
import {StyleSheet, View} from 'react-native';
import Members from './assets/data/Members';
import AnimatedStack from './src/components/AnimatedStack';
import Card from './src/components/TinderCard';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const App = () => {
  return (
    <View style={styles.container}>
      <MatchesScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
