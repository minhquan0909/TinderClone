import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Members from '../../assets/data/Members';
import CrossIcon from '../../assets/icons/CrossIcon';
import FlashIcon from '../../assets/icons/FlashIcon';
import LoveIcon from '../../assets/icons/LoveIcon';
import StarIcon from '../../assets/icons/StarIcon';
import UndoIcon from '../../assets/icons/UndoIcon';
import AnimatedStack from '../components/AnimatedStack';
import Card from '../components/TinderCard';
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const IconSize = '30px';
const IconList = [
  {
    id: 1,
    Icon: <UndoIcon height={IconSize} width={IconSize} />,
  },
  {
    id: 2,
    Icon: <CrossIcon height={IconSize} width={IconSize} />,
  },
  {
    id: 3,
    Icon: <StarIcon height={IconSize} width={IconSize} />,
  },
  {
    id: 4,
    Icon: <LoveIcon height={IconSize} width={IconSize} />,
  },
  {
    id: 5,
    Icon: <FlashIcon height={IconSize} width={IconSize} />,
  },
];
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
      <View style={styles.bottomNavigation}>
        {IconList.map(item => (
          <TouchableOpacity key={item.id} style={styles.icon}>
            {item.Icon}
          </TouchableOpacity>
        ))}
      </View>
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
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
  icon: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default HomeScreen;
