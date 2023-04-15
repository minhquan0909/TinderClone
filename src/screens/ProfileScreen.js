import {DataStore} from '@aws-amplify/datastore';
import {Picker} from '@react-native-picker/picker';
import {Auth} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {User} from '../models';
const ProfileScreen = props => {
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [image, setImage] = useState();
  const [gender, setGender] = useState();
  const [lookingFor, setLookingFor] = useState();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getCurrentUser = async () => {
      const userDB = await Auth.currentAuthenticatedUser();
      const subID = userDB.attributes.sub;
      const dbUsers = await DataStore.query(User, u => u.sub.eq(subID));
      if (dbUsers.length < 0) {
        return;
      }
      const dbUser = dbUsers[0];
      console.log('Get Data success', dbUser);
      setUser(dbUser);
      setName(dbUser.name);
      setBio(dbUser.bio);
      setGender(dbUser.gender);
      setLookingFor(dbUser.lookingFor);
    };
    getCurrentUser();
  }, []);
  const isValid = () => {
    return name && bio && gender && lookingFor;
  };
  const onSave = async () => {
    if (!isValid()) {
      console.warn('NotValid');
      return;
    }
    if (user) {
      const updatedUser = User.copyOf(user, updated => {
        updated.name = name;
        updated.bio = bio;
        updated.gender = gender;
        updated.lookingFor = lookingFor;
      });
      try {
        await DataStore.save(updatedUser);
      } catch (error) {
        console.log(error);
      }
      Alert.alert('Updated user');
      // console.log(user);
    } else {
      const userDB = await Auth.currentAuthenticatedUser();
      const subID = userDB.attributes.sub;
      const newUser = new User({
        name,
        image:
          'https://afamilycdn.com/2019/10/24/5bd607e0c0cb89afbe0d17eda2f628fc-15719007946641269292659.png',
        bio,
        gender,
        lookingFor,
        sub: subID,
      });
      await DataStore.save(newUser);
      Alert.alert('Created user');
    }
  };
  return (
    <View>
      <Text>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name..."
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Bio..."
        style={styles.input}
        value={bio}
        onChangeText={text => setBio(text)}
      />

      <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
        <Picker.Item label="Male" value="MALE" />
        <Picker.Item label="Female" value="FEMALE" />
        <Picker.Item label="Other" value="OTHER" />
      </Picker>
      <Picker
        selectedValue={lookingFor}
        onValueChange={(itemValue, itemIndex) => setLookingFor(itemValue)}>
        <Picker.Item label="Male" value="MALE" />
        <Picker.Item label="Female" value="FEMALE" />
        <Picker.Item label="Other" value="OTHER" />
      </Picker>

      <TouchableOpacity
        onPress={onSave}
        style={{
          alignItems: 'center',
          backgroundColor: '#F63A6E',
          padding: 10,
          margin: 10,
          borderRadius: 15,
        }}>
        <Text>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Auth.signOut()}
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
          margin: 10,
          borderRadius: 15,
        }}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    margin: 10,
    borderBottomColor: '#F63A6E',
  },
  color: {
    color: '#F63A6E',
  },
});
