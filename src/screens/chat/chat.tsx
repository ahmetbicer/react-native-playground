import {KeyboardAccessoryView} from '@flyerhq/react-native-keyboard-accessory-view';
import React, {useState} from 'react';
import {FlatList, GestureResponderHandlers, Text, View} from 'react-native';
import {MemoizedChatBubble} from './components/chat-bubble';
import {ChatInput} from './components/chat-input';

const pastMessages = [
  {text: 'hey', isSelf: true},
  {text: 'selam', isSelf: false},
  {text: 'naber', isSelf: true},
].reverse();

export const Chat = () => {
  const [messages, setMessages] = useState(pastMessages);

  const addMessage = text => {
    setMessages([{text: text, isSelf: true}, ...messages]);
  };

  const renderItem = ({item: message}) => {
    return <MemoizedChatBubble {...message} />;
  };

  const renderScrollable = (panHandlers: GestureResponderHandlers) => (
    <FlatList
      keyboardDismissMode="interactive"
      data={messages}
      inverted
      renderItem={renderItem}
      keyExtractor={item => item.text}
      {...panHandlers}
    />
  );

  return (
    <KeyboardAccessoryView renderScrollable={renderScrollable}>
      <ChatInput addMessage={addMessage} />
    </KeyboardAccessoryView>
  );
};
