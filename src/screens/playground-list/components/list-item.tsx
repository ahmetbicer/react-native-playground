import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View, ViewStyle} from 'react-native';

interface ListItemProps {
  title: string;
}

export const ListItem = (props: ListItemProps) => {
  const {title} = props;

  const navigation = useNavigation();

  const navigateToScreen = () => {
    //@ts-ignore
    navigation.navigate(title);
  };

  return (
    <Pressable
      onPress={navigateToScreen}
      android_ripple={{color: 'grey'}}
      style={CONTAINER}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const CONTAINER: ViewStyle = {
  backgroundColor: 'white',
  justifyContent: 'center',
  padding: 20,
  elevation: 3,
};
