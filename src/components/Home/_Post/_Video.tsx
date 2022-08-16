import {StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import {SCREEN_WIDTH} from '~config';

const _Video = ({video, paused}: {video: string; paused: boolean}) => {
  let ref = useRef(null);
  const [state, setstate] = useState(200);

  return (
    <Video
      ref={ref}
      source={{
        uri: video,
      }}
      onLoad={data => {
        let {width, height} = data.naturalSize;
        setstate((height / width) * SCREEN_WIDTH);
      }}
      style={[styles.video, {height: state}]}
      controls={false}
      resizeMode="contain"
      repeat
      poster={'https://ig-kompanion.s3.us-east-2.amazonaws.com/main-ph.jpg'}
      paused={paused}
      posterResizeMode="cover"
    />
  );
};

export default _Video;

const styles = StyleSheet.create({
  video: {
    width: SCREEN_WIDTH,
    height: 100,
  },
});
