import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IPost} from '../../@types/post';
import {SCREEN_WIDTH} from '../../config';
// import Video from 'react-native-video';
import {Footer, Header} from './';
import {_Images} from './_Post';

// const VideoItem = ({video}: {video: string}) => {
//   return (
//     <Video
//       source={{
//         uri: video,
//       }}
//       style={styles.video}
//       controls={false}
//       resizeMode="contain"
//       posterResizeMode="cover"
//     />
//   );
// };

const Post = ({user, type, images}: IPost) => {
  return (
    <View style={styles.container}>
      <Header {...user} />
      {type === 'image' ? (
        <_Images images={images} />
      ) : // <VideoItem video={video} />
      null}
      <Footer />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {},

  video: {
    width: SCREEN_WIDTH,
  },
});
