import React from 'react';
import {View} from 'react-native';

import {ListItem} from './components/list-item';

export const PlaygroundList = () => {
  return (
    <View>
      <ListItem title="Swiper" />
      <ListItem title="TernaryOperator" />
      <ListItem title="Chat" />
    </View>
  );
};
