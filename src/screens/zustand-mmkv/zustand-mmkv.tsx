import React, {useState} from 'react';
import {Button, Text, View, ViewStyle} from 'react-native';
import {useStore} from './store';

export const ZustandMMKV = () => {
  const fishes = useStore(state => state.fishes);
  const addFishes = useStore(state => state.addAFish);

  return (
    <View style={CONTAINER}>
      <Text>{fishes}</Text>
      <Button title="add fish" onPress={addFishes} />
    </View>
  );
};

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#E5E5E5',
};
