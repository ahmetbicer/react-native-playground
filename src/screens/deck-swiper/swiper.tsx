import React from 'react';
import {Dimensions, Text, View, ViewStyle} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Card} from './card';

const BOX: ViewStyle = {
  width: 270,
  height: 500,
  borderRadius: 25,
};

export const Swiper = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {[...Array(4).keys()].reverse().map(item => (
        <Card key={item} title={'card' + item} />
      ))}
    </View>
  );
};
