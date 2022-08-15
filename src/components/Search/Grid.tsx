import {
  FlatList,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SCREEN_WIDTH} from '../../config';
import useApi from '../../hooks/useApi';
import {GridResponseData, IRow} from '../../@types/grid';
import * as _ from 'lodash';
import {Footer, Header, Row} from '.';

const isEndReached = ({
  contentOffset,
  contentSize,
  layoutMeasurement,
}: NativeScrollEvent): boolean => {
  const PADDING = 20;
  return (
    layoutMeasurement.height + contentOffset.y >= contentSize.height - PADDING
  );
};

const Grid = () => {
  const [page, setPage] = useState(1);
  const CONFIG = {
    config: {
      baseURL: 'https://62f952f6e05644803535875c.mockapi.io/api/v1/',
      url: `search/${page}`,
    },
  };
  const {response, fetchData, loading} = useApi<GridResponseData>(CONFIG);

  const [data, setData] = useState<IRow[]>([]);

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
      setData([...data, ..._data]);
    }
  }, [response]);

  // const memoizedData: IRow[] = useMemo(() => {
  //   if (!data) {
  //     return [];
  //   }
  //   //Split data into chunks of 4 image

  //   console.log(memoizedData);
  //   if (memoizedData) {
  //     return;
  //   } else {
  //     return _data;
  //   }
  // }, [data]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={{flexGrow: 1}}
      style={styles.scrollView}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        setPage(page + 1);
      }}
      scrollEventThrottle={16}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <Row key={`${index}`} {...item} />}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading ? <Footer /> : null}
      removeClippedSubviews
    />
    // <ScrollView
    //   style={styles.scrollView}
    //   scrollEventThrottle={400}

    //   onScroll={evt => {
    //     if (isEndReached(evt.nativeEvent)) {
    //       fetchData(CONFIG.config);
    //     }
    //   }}>
    //   <Header />
    //   {data.map((row, index) => (
    //     <Row key={`${index}`} {...row} />
    //   ))}
    //   {loading && <Footer />}
    // </ScrollView>
  );
};

export default Grid;

const styles = StyleSheet.create({
  scrollView: {
    width: SCREEN_WIDTH,
  },
});
