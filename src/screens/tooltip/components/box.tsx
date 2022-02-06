import React from 'react';
import {LayoutChangeEvent, View, ViewStyle} from 'react-native';

interface BoxProps {
  color: string;
  onLayout: (payload: LayoutChangeEvent) => void;
}

// prettier-ignore
export const Box = (props: BoxProps) => {
const {color, onLayout }= props;
  const BOX: ViewStyle = {
    width: 50,
    height: 50,
    backgroundColor: color,
  };

  return (
    <View style={BOX} onLayout={onLayout}>
      <View style={VERTICAL_SEPERATOR}/>
      <View style={HORIZONTAL_SEPERATOR}/>
    </View>
  )
};

const HORIZONTAL_SEPERATOR: ViewStyle = {
  position: 'absolute',
  top: 25,
  height: 1,
  width: '100%',
  backgroundColor: 'white',
  zIndex: 999,
};

const VERTICAL_SEPERATOR: ViewStyle = {
  position: 'absolute',
  left: 25,
  height: '100%',
  width: 1,
  backgroundColor: 'white',
  zIndex: 999,
};
