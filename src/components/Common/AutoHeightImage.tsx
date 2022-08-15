import {ImageProps, StyleSheet} from 'react-native';
import React, {memo, useState} from 'react';
import {SCREEN_WIDTH} from '~config';
import FastImage from 'react-native-fast-image';
const AutoHeightImage = memo(({style, ...props}: ImageProps) => {
  const [state, setstate] = useState(200);
  return (
    <FastImage
      {...props}
      style={[{height: state}, styles.image, style]}
      resizeMode={'contain'}
      onLoad={evt => {
        let {width, height} = evt.nativeEvent;
        setstate((height / width) * SCREEN_WIDTH);
      }}
    />
  );
});

export default AutoHeightImage;

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
  },
});
