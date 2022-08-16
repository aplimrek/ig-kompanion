import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IPost} from '~@types/post';
import {Footer, Header} from '~components/Home';
import {_Images, _Video} from '~components/Home/_Post';

const Post = ({user, type, images, video, isViewable}: IPost) => {
  return (
    <View style={styles.container}>
      <Header {...user} />
      {type === 'image' ? (
        <_Images images={images} />
      ) : (
        <_Video video={video} paused={!isViewable} />
      )}
      <Footer />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {},
});
