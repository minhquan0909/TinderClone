import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import users from '../../assets/data/Members';
const MatchesScreen = props => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>New Matches</Text>
        <View style={styles.users}>
          {users.map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={{uri: user.image}} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MatchesScreen;
const styles = StyleSheet.create({
  root: {width: '100%', flex: 1, padding: 10},
  container: {padding: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F63A6E',
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 1,
    padding: 2,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
