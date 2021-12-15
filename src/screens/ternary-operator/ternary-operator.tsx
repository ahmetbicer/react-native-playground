import React from 'react';
import {View, ViewStyle} from 'react-native';

const Box = ({color}: {color: string}) => {
  const BOX: ViewStyle = {
    width: 50,
    height: 50,
    backgroundColor: color,
  };

  return <View style={BOX}></View>;
};

interface TernaryProps {
  children: [JSX.Element, JSX.Element];
  condition: boolean;
}

const Ternary = (props: TernaryProps) => {
  const {children, condition} = props;
  const [first, second] = children;

  return condition ? first : second;
};

export const TernaryOperator = () => {
  return (
    <View style={CONTAINER}>
      <Ternary condition={!true}>
        <Box color="red" />
        <Box color="blue" />
      </Ternary>
      {true ? <Box color="red" /> : <Box color="blue" />}
    </View>
  );
};

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
