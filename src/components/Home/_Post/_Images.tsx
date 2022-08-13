import {FlatList} from 'react-native';
import React from 'react';
import ProgressiveImage from '../../Common/ProgressiveImage';
import {IImage} from '../../../@types/post';

const _Images = ({images}: {images: IImage[]}) => {
  return (
    <FlatList
      initialNumToRender={1}
      data={images}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProgressiveImage
          source={{uri: item.original}}
          thumbnailSource={{uri: item.thumbnail}}
        />
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default _Images;
