import React, {useEffect, useState} from 'react';
// prettier-ignore
import { LayoutChangeEvent, Text, TextStyle, View, ViewStyle } from 'react-native';
import {InitialLayout, LayoutEvent, TooltipProps} from '../tooltip.types';

const SPACER = 10;

export const Tooltip = (props: TooltipProps) => {
  const {position, target} = props;
  // prettier-ignore
  const [layout, setLayout] = useState<LayoutEvent>(InitialLayout);

  const onLayout = (payload: LayoutChangeEvent) => {
    setLayout(payload.nativeEvent.layout);
  };

  const getPosition = () => {
    switch (position) {
      case 'left':
        return LEFT;
      case 'right':
        return RIGHT;
      case 'top':
        return TOP;
      case 'bottom':
        return BOTTOM;
    }
  };

  const LEFT: ViewStyle = {
    top: target.y - (layout.height / 2 - target.height / 2),
    left: target.x - layout.width - SPACER,
  };

  const RIGHT: ViewStyle = {
    top: target.y - (layout.height / 2 - target.height / 2),
    left: target.x + target.width + SPACER,
  };

  const TOP: ViewStyle = {
    top: target.y - layout.height - SPACER,
    left: target.x - (layout.width / 2 - target.width / 2),
  };

  const BOTTOM: ViewStyle = {
    top: target.y + target.height + SPACER,
    left: target.x - (layout.width / 2 - target.width / 2),
  };

  return (
    <View style={[TOOLTIP_CONTAINER, getPosition()]} onLayout={onLayout}>
      <View style={HORIZONTAL_SEPERATOR} />
      <View style={VERTICAL_SEPERATOR} />
    </View>
  );
};

const HEIGHT = 160;
const WIDTH = 100;

const TOOLTIP_CONTAINER: ViewStyle = {
  width: WIDTH,
  height: HEIGHT,
  position: 'absolute',
  backgroundColor: 'blue',
  zIndex: 9999,
  borderRadius: 15,
};

const VERTICAL_SEPERATOR: ViewStyle = {
  position: 'absolute',
  left: WIDTH / 2,
  height: '100%',
  width: 1,
  backgroundColor: 'white',
  zIndex: 999,
};

const HORIZONTAL_SEPERATOR: ViewStyle = {
  position: 'absolute',
  top: HEIGHT / 2,
  height: 1,
  width: '100%',
  backgroundColor: 'white',
  zIndex: 999,
};

const TOOLTIP_TEXT: TextStyle = {
  color: 'white',
  padding: 10,
};
