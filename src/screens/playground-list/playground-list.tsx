import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {ListItem} from './components/list-item';

export const PlaygroundList = () => {
  return (
    <View>
      <ListItem title="Swiper" />
    </View>
  );
};
