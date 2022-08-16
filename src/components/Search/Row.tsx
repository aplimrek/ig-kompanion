import {StyleSheet, View} from 'react-native';
import React, {memo, useRef} from 'react';
import {IRow} from '~@types/grid';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {Colors, SCREEN_WIDTH} from '~config';
const Row = ({videoPosition, images, video, isViewable = false}: IRow) => {
  const ref = useRef(null);
  return (
    <View style={styles.row}>
      {videoPosition === 'left' && (
        <View style={styles.column}>
          <Video
            ref={ref}
            source={{
              uri: video.video,
            }}
            style={styles.video}
            controls={false}
            resizeMode="cover"
            repeat
            paused={!isViewable}
            poster={
              'https://ig-kompanion.s3.us-east-2.amazonaws.com/story-ph.jpg'
            }
          />
        </View>
      )}
      <View style={styles.column}>
        <FastImage style={styles.image} source={{uri: images[0].image}} />
        <FastImage style={styles.image} source={{uri: images[1].image}} />
      </View>
      <View style={styles.column}>
        <FastImage style={styles.image} source={{uri: images[2].image}} />
        <FastImage style={styles.image} source={{uri: images[3].image}} />
      </View>
      {videoPosition === 'right' && (
        <View style={styles.column}>
          <Video
            ref={ref}
            source={{
              uri: video.video,
            }}
            style={styles.video}
            controls={false}
            resizeMode="cover"
            repeat
            paused={!isViewable}
          />
        </View>
      )}
    </View>
  );
};

export default memo(Row);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: (SCREEN_WIDTH / 3) * 2,
    width: SCREEN_WIDTH,
  },
  column: {
    backgroundColor: Colors.LIGHT_GRAY,
    flex: 1,
  },
  image: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});
