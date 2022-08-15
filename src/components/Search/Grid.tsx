import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SCREEN_WIDTH} from '~config';
import {useApi} from '~hooks';
import {GridResponseData, IRow} from '~@types/grid';
import * as _ from 'lodash';
import {Footer, Header, Row} from '~components/Search';

const Grid = () => {
  const [page, setPage] = useState(1);
  const CONFIG = {
    config: {
      baseURL: 'https://62f952f6e05644803535875c.mockapi.io/api/v1/',
      url: `search/${page}`,
    },
  };
  const {response, fetchData, loading} = useApi<GridResponseData>();
  const [data, setData] = useState<IRow[]>([]);
  const [extraData, setExtraData] = useState<IRow[]>([]);

  useEffect(() => {
    if (!loading) {
      fetchData(CONFIG.config);
    }
  }, [page]);

  useEffect(() => {
    if (response) {
      let imageChunks = _.chunk(response.images, 4);
      let _data: IRow[] = [];
      imageChunks.forEach((chunk, index) => {
        _data.push({
          id: `${page}-${index}`,
          images: chunk,
          video: response.videos[index],
          videoPosition: index % 2 === 0 ? 'right' : 'left',
        });
      });
      setExtraData(_data);
      setData(prev => [...prev, ..._data]);
    }
  }, [response]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getItemLayout = (_, index: number) => ({
    length: (SCREEN_WIDTH / 3) * 2,
    offset: (SCREEN_WIDTH / 3) * 2 * index,
    index,
  });

  return (
    <FlatList
      data={data}
      contentContainerStyle={{}}
      style={styles.scrollView}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        setPage(page + 1);
      }}
      getItemLayout={getItemLayout}
      scrollEventThrottle={100}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <Row key={`${index}`} {...item} />}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading ? <Footer /> : null}
      removeClippedSubviews={true}
      windowSize={3}
      refreshing={loading}
      extraData={extraData}
    />
  );
};

export default Grid;

const styles = StyleSheet.create({
  scrollView: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
});
