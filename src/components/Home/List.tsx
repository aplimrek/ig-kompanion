import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {IPost} from '~@types/post';
import {Post} from '~components/Home';
import {Footer} from '~components/Search';
import {SCREEN_WIDTH} from '~config';
import {useApi} from '~hooks';
import {SERVICE_URLS} from '~services';
import useViewable from '~hooks/useViewable';

const List = () => {
  const CONFIG = {
    url: SERVICE_URLS.Home,
  };
  const {response: posts, fetchData, loading} = useApi<IPost[]>();
  // const [posts, setPosts] = useState<IPost[]>(DummyPosts);
  const {viewables, viewabilityConfigCallbackPairs} = useViewable();

  useEffect(() => {
    fetchData(CONFIG);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Post
          isViewable={viewables.findIndex(v => v.item.id === item.id) !== -1}
          key={item.id}
          {...item}
        />
      )}
      style={styles.flatlist}
      ListFooterComponent={loading ? <Footer /> : null}
      removeClippedSubviews={true}
      windowSize={3}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  flatlist: {
    width: SCREEN_WIDTH,
  },
});
