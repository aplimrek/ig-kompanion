import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IUser} from '../../../@types/post';
import {Spacer} from '../../Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../config';

const Header = ({username}: IUser) => {
  return (
    <View style={styles.header}>
      <View style={styles.profilePicture} />
      <Text style={styles.username}>{username}</Text>
      <Spacer />
      <Icon name="ellipsis-h" size={15} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  username: {
    marginLeft: 8,
    fontSize: 11,
    fontWeight: '700',
  },
  profilePicture: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.DARK_PURPLE,
  },
});
