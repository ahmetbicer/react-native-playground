import {LinkPreview} from '@flyerhq/react-native-link-preview';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, ViewStyle} from 'react-native';

interface ChatBubbleProps {
  text: string;
  isSelf: boolean;
}

const CONTAINER: ViewStyle = {
  flex: 1,
};

const BUBBLE: ViewStyle = {
  margin: 10,
  padding: 12,
  backgroundColor: 'pink',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
};

const ChatBubble = (props: ChatBubbleProps) => {
  const {text, isSelf} = props;

  const [isSelected, setIsSelected] = useState(false);

  const BUBBLE_POSITION: ViewStyle = {
    alignSelf: isSelf ? 'flex-end' : 'flex-start',
    borderBottomLeftRadius: isSelf ? 15 : 0,
    borderBottomRightRadius: isSelf ? 0 : 15,
  };

  const CONTAINER_BG: ViewStyle = {
    backgroundColor: isSelected ? 'blue' : 'white',
  };

  return (
    <Pressable
      onLongPress={() => setIsSelected(true)}
      onPress={() => setIsSelected(false)}
      style={[CONTAINER, CONTAINER_BG]}>
      <View style={[BUBBLE, BUBBLE_POSITION]}>
        <Text>{text}</Text>
        {/* <LinkPreview text={text} /> */}
      </View>
    </Pressable>
  );
};

export const MemoizedChatBubble = React.memo(ChatBubble);
