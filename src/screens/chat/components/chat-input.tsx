import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, View, ViewStyle} from 'react-native';

interface ChatInputProps {
  addMessage: (text: string) => void;
}

export const ChatInput = (props: ChatInputProps) => {
  const {addMessage} = props;
  const [text, setText] = useState('');

  const onSubmitEditing = () => {
    addMessage(text);
    setText('');
  };

  return (
    <View style={CONTAINER}>
      <TextInput
        value={text}
        onChangeText={setText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const CONTAINER: ViewStyle = {
  flex: 1,
  height: 50,
  backgroundColor: 'red',
};
