import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IPost} from '../../@types/post';
import {Post} from '.';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config/Constants';

const DummyPosts: IPost[] = [
  {
    id: '1',
    type: 'image',
    video: '',
    description: 'descriptive info about post',
    images: ['', ''],
    user: {id: '1', profile_picture: '', username: 'alpimrek'},
  },
  {
    id: '2',
    type: 'image',
    video: '',
    description: 'descriptive info about post',
    images: ['', ''],
    user: {id: '1', profile_picture: '', username: 'alpimrek'},
  },
  {
    id: '3',
    type: 'image',
    video: '',
    description: 'descriptive info about post',
    images: ['', ''],
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
