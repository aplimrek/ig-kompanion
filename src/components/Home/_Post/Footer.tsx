import {StyleSheet} from 'react-native';
import React from 'react';
import {ChildWrapper, Spacer} from '~components/Common';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <ChildWrapper childStyle={styles.icon} style={styles.footer} childSize={16}>
      <Icon name="heart-o" />
      <Icon name="comment-o" />
      <Icon name="paper-plane-o" />
      <Spacer />
      <Icon name="bookmark-o" />
    </ChildWrapper>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 11,
  },
  icon: {
    padding: 5,
  },
});
