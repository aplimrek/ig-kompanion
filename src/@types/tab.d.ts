import {RouteProp} from '@react-navigation/core';

export interface ITabIcon {
  route: RouteProp<ParamListBase, string>;
  props: {
    focused: boolean;
    color: string;
    size: number;
  };
}
