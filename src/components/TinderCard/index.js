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
        style={styles.imgBackground}
        imageStyle={styles.img}>
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
    height: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  img: {
    borderRadius: 10,
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
