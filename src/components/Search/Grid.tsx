import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SCREEN_WIDTH} from '~config';
import {useApi} from '~hooks';
import {GridResponseData, IRow} from '~@types/grid';
import * as _ from 'lodash';
import {Footer, Header, Row} from '~components/Search';
import {SERVICE_URLS} from '~services';
import useViewable from '~hooks/useViewable';

const Grid = () => {
  const [page, setPage] = useState(1);
  const CONFIG = {
    config: {
      url: `${SERVICE_URLS.Search}/${page}`,
    },
  };
  const {response, fetchData, loading} = useApi<GridResponseData>();
  const [data, setData] = useState<IRow[]>([]);

  const {viewables, viewabilityConfigCallbackPairs} = useViewable();
  useEffect(() => {
    if (!loading) {
      fetchData(CONFIG.config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (response) {
      //Split images to group of for each row of grid
      let imageChunks = _.chunk(response.images, 4);
      let _data: IRow[] = [];
      //Each row includers 4 images and 1 video
      //Video have to change position for each row
      imageChunks.forEach((chunk, index) => {
        _data.push({
          id: `${page}-${index}`,
          key: `${page}-${index}`,
          images: chunk,
          video: response.videos[index],
          videoPosition: index % 2 === 0 ? 'right' : 'left',
        });
      });
      setData(prev => [...prev, ..._data]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  //This calculation is for flatlist not to calculate the heigth of the row in each render
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getItemLayout = (_: any, index: number) => ({
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
      onEndReached={() => setPage(page + 1)}
      getItemLayout={getItemLayout}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Row
          {...item}
          isViewable={viewables.findIndex(v => v.item.id === item.id) !== -1}
        />
      )}
      ListHeaderComponent={<Header />}
      ListFooterComponent={loading ? <Footer /> : null}
      removeClippedSubviews={true}
      windowSize={3}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
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
