import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {IPost} from '../../@types/post';
import {SCREEN_WIDTH} from '../../config';
import Video from 'react-native-video';
import {Footer, Header} from './';
import {_Images} from './_Post';

const VideoItem = ({video}: {video: string}) => {
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
    />
  );
};

const Post = ({user, type, images, video}: IPost) => {
  return (
    <View style={styles.container}>
      <Header {...user} />
      {type === 'image' ? (
        <_Images images={images} />
      ) : (
        <VideoItem video={video} />
      )}
      <Footer />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {},

  video: {
    width: SCREEN_WIDTH,
    height: 100,
  },
});
