import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

const ChildWrapper = ({
  childStyle,
  children,
  style,
  childSize,
}: {
  childStyle: StyleProp<ViewStyle>;
  children: React.ReactNode | readonly React.ReactNode[];
  style: StyleProp<ViewStyle>;
  childSize?: number;
}) => {
  return (
    <View style={style}>
      {React.Children.map(children, child => {
        let _child = child as React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >;
        return React.cloneElement(_child, {
          style: [_child.props.style, childStyle],
          size: childSize,
        });
      })}
    </View>
  );
};

export default ChildWrapper;
