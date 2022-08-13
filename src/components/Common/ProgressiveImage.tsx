import {ImageProps, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {AutoHeightImage} from '.';
import {BlurView} from '@react-native-community/blur';

interface ProgressiveImageProps extends ImageProps {
  thumbnailSource: ImageSourcePropType;
}

const ProgressiveImage = ({
  thumbnailSource,
  source,
  style,
  ...props
}: ProgressiveImageProps) => {
  return (
    <View style={styles.container}>
      <AutoHeightImage
        {...props}
        source={thumbnailSource}
        style={[styles.overlay, style]}
      />
      <BlurView style={styles.blur} blurType="ultraThinMaterialDark" />
      <AutoHeightImage {...props} source={source} style={style} />
    </View>
  );
};

export default ProgressiveImage;

const styles = StyleSheet.create({
  container: {},
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
