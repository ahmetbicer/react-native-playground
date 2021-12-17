import React, {useEffect} from 'react';
import {Text, View, ViewStyle} from 'react-native';

interface ChatBubbleProps {
  text: string;
  isSelf: boolean;
}

const BUBBLE: ViewStyle = {
  margin: 10,
  padding: 20,
  backgroundColor: 'pink',
  borderRadius: 15,
};

const ChatBubble = (props: ChatBubbleProps) => {
  const {text, isSelf} = props;
  console.log('rendered', text);
  const BUBBLE_POSITION: ViewStyle = {
    alignSelf: isSelf ? 'flex-end' : 'flex-start',
  };

  useEffect(() => {}, []);
  return (
    <View style={[BUBBLE, BUBBLE_POSITION]}>
      <Text>{text}</Text>
    </View>
  );
};

export const MemoizedChatBubble = React.memo(ChatBubble);
