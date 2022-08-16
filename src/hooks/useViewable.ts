import {
  ViewabilityConfig,
  ViewabilityConfigCallbackPair,
  ViewToken,
} from 'react-native';
import {useRef, useState} from 'react';

const useViewable = () => {
  const [viewables, setViewables] = useState<ViewToken[]>([]);

  //Video can play if 50% of it is in viewport
  const onViewableItemsChanged = (info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    setViewables(info.viewableItems);
  };
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const viewabilityConfigCallbackPairs = useRef<
    ViewabilityConfigCallbackPair[]
  >([{viewabilityConfig, onViewableItemsChanged}]);

  return {viewables, viewabilityConfigCallbackPairs};
};

export default useViewable;
