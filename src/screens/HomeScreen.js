import React from 'react';
import {StyleSheet, View} from 'react-native';
import Members from '../../assets/data/Members';
import AnimatedStack from '../components/AnimatedStack';
import Card from '../components/TinderCard';
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };
  const onSwipeRight = user => {
    console.warn('swipe right', user.name);
  };
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={Members}
        renderItem={({item}) => <Card member={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
export default HomeScreen;
