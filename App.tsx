import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import AnimatedStack from './src/components/AnimatedStack';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import TinderIcon from './assets/icons/TinderIcon';
import StarIcon from './assets/icons/StarIcon';
import MessageIcon from './assets/icons/MessageIcon';
import ProfileIcon from './assets/icons/ProfileIcon';
import ProfileScreen from './src/screens/ProfileScreen';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const IconSize = '30px';

const IconList = [
  {
    id: 1,
    Icon: <TinderIcon height={IconSize} width={IconSize} />,
    screen: 'HOME',
  },
  {
    id: 2,
    Icon: <StarIcon height={IconSize} width={IconSize} />,
    screen: 'LIKE',
  },
  {
    id: 3,
    Icon: <MessageIcon height={IconSize} width={IconSize} />,
    screen: 'MESSAGE',
  },
  {
    id: 4,
    Icon: <ProfileIcon height={IconSize} width={IconSize} />,
    screen: 'PROFILE',
  },
];
const App = () => {
  const [activeScreen, setActiveScreen] = useState('HOME');
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topNavigation}>
          {IconList.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.icon}
              onPress={() => {
                setActiveScreen(item?.screen);
              }}>
              {item.Icon}
            </TouchableOpacity>
          ))}
        </View>
        {activeScreen === 'HOME' && <HomeScreen />}
        {activeScreen === 'MESSAGE' && <MatchesScreen />}
        {activeScreen === 'PROFILE' && <ProfileScreen />}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFAFBD',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
    borderRadius: 50,
  },
  icon: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'white',
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
export default withAuthenticator(App);
