import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {IPost} from '../../@types/post';
import {Post} from '.';
import {SCREEN_WIDTH} from '../../config/Constants';

const DummyPosts: IPost[] = [
  {
    id: '1',
    type: 'image',
    video: '',
    description: 'descriptive info about post',
    images: [
      {
        id: '1',
        thumbnail:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-thumb.jpg?v=10',
        original:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-1.jpg?v=10',
      },
      {
        id: '2',
        thumbnail:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-thumb.jpg?v=11',
        original:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-2.jpg?v=11',
      },
    ],
    user: {id: '1', profile_picture: '', username: 'alpimrek'},
  },
  //   {
  //     id: '2',
  //     type: 'video',
  //     video: 'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-video-1.mp4',
  //     description: 'descriptive info about post',
  //     images: ['', ''],
  //     user: {id: '1', profile_picture: '', username: 'alpimrek'},
  //   },
  {
    id: '3',
    type: 'image',
    video: '',
    description: 'descriptive info about post',
    images: [
      {
        id: '3',
        thumbnail:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-thumb.jpg',
        original:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-2.jpg?v=3',
      },
      {
        id: '4',
        thumbnail:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-thumb.jpg',
        original:
          'https://ig-kompanion.s3.us-east-2.amazonaws.com/ig-image-2.jpg',
      },
    ],
    user: {id: '1', profile_picture: '', username: 'alpimrek'},
  },
];

const List = () => {
  const [posts, setPosts] = useState<IPost[]>(DummyPosts);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Post key={item.id} {...item} />}
      style={styles.flatlist}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  flatlist: {
    width: SCREEN_WIDTH,
  },
});
