import React, {useState} from 'react';
import {LayoutChangeEvent, View, ViewStyle} from 'react-native';

import {InitialLayout, LayoutEvent} from './tooltip.types';
import {Box, Tooltip} from './components';

export const TooltipContainer = () => {
  const [targetLayout, setTargetLayout] = useState<LayoutEvent>(InitialLayout);

  const onTargetLayout = (payload: LayoutChangeEvent) => {
    setTargetLayout(payload.nativeEvent.layout);
  };

  return (
    <View style={CONTAINER}>
      <Tooltip position="left" target={targetLayout} />
      <Box color="red" onLayout={onTargetLayout} />
    </View>
  );
};

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
