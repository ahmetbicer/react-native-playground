import {LinkPreview} from '@flyerhq/react-native-link-preview';
import React, {useEffect} from 'react';
import {Text, View, ViewStyle} from 'react-native';

interface ChatBubbleProps {
  text: string;
  isSelf: boolean;
}

const BUBBLE: ViewStyle = {
  margin: 10,
  padding: 12,
  backgroundColor: 'pink',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
};

const ChatBubble = (props: ChatBubbleProps) => {
  const {text, isSelf} = props;

  const BUBBLE_POSITION: ViewStyle = {
    alignSelf: isSelf ? 'flex-end' : 'flex-start',
    borderBottomLeftRadius: isSelf ? 15 : 0,
    borderBottomRightRadius: isSelf ? 0 : 15,
  };

  useEffect(() => {}, []);
  return (
    <View style={[BUBBLE, BUBBLE_POSITION]}>
      <Text>{text}</Text>
      {/* <LinkPreview text={text} /> */}
    </View>
  );
};

export const MemoizedChatBubble = React.memo(ChatBubble);
