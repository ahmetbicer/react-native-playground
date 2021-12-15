import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const BOX: ViewStyle = {
  position: 'absolute',
  width: 270,
  height: 500,
  borderRadius: 25,
  backgroundColor: 'red',
  elevation: 4,
};

const TEXT: TextStyle = {
  flex: 1,
  color: 'white',
  textAlign: 'center',
  textAlignVertical: 'center',
};

export const Card = ({title}: {title: string}) => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const speed = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value},
        {rotateZ: `${offset.value / Math.PI}deg`},
      ],
      backgroundColor: isPressed.value ? 'gray' : 'black',
      opacity: opacity.value,
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = e.translationX;
      speed.value = e.velocityX;
    })
    .onEnd(() => {
      const degree = offset.value / Math.PI;

      if (degree >= 45 || speed.value > 500) {
        offset.value = withSpring(offset.value + 60);
        opacity.value = withTiming(0);
      } else if (degree <= -45 || speed.value < -500) {
        offset.value = withSpring(offset.value - 60);
        opacity.value = withTiming(0);
      } else {
        offset.value = withSpring(0);
      }
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[BOX, animatedStyles]}>
        <Text style={TEXT}>{title}</Text>
      </Animated.View>
    </GestureDetector>
  );
};
