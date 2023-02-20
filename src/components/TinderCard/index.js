import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
const Card = props => {
  const {name, image, bio} = props.member;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '75%',
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  bio: {
    fontSize: 20,
    color: 'white',
    lineHeight: 25,
  },
  cardInner: {
    padding: 10,
  },
});
export default Card;
