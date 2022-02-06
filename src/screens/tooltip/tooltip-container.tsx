import React, {useState} from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {InitialLayout, LayoutEvent} from './tooltip.types';
import {Box, Tooltip} from './components';

export const TooltipContainer = () => {
  const [targetLayout, setTargetLayout] = useState<LayoutEvent>(InitialLayout);
  const [position, setPosition] = useState<string>('top');

  const changePosition = () => {
    switch (position) {
      case 'left':
        setPosition('top');
        break;
      case 'top':
        setPosition('right');
        break;
      case 'right':
        setPosition('bottom');
        break;
      case 'bottom':
        setPosition('left');
        break;
    }
  };

  const onTargetLayout = (payload: LayoutChangeEvent) => {
    setTargetLayout(payload.nativeEvent.layout);
  };

  return (
    <>
      <View style={CONTAINER}>
        <Tooltip position={position} target={targetLayout} />
        <Box color="red" onLayout={onTargetLayout} />
      </View>
      <Pressable
        android_ripple={{color: 'gray'}}
        style={BUTTON}
        onPress={changePosition}>
        <Text>{position}</Text>
      </Pressable>
    </>
  );
};

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const BUTTON: ViewStyle = {
  padding: 15,
  backgroundColor: 'lightgray',
  justifyContent: 'center',
  alignItems: 'center',
};
