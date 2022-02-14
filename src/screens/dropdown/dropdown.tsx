import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'North America', value: 'na'},
    {label: 'United States', value: 'usa', parent: 'na'},
    {label: 'Canada', value: 'canada', parent: 'na'},

    {label: 'Europe', value: 'eu'},
    {label: 'Norway', value: 'norway', parent: 'eu'},
    {label: 'Belgium', value: 'belgium', parent: 'eu'},
  ]);
  return (
    <View style={CONTAINER}>
      <DropDownPicker
        placeholder="Şehir"
        open={open}
        searchable={true}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          backgroundColor: '#F5F6F7',
          borderWidth: 0,
          borderRadius: 15,
        }}
        containerStyle={{
          flex: 1,
          paddingHorizontal: 20,
        }}
        dropDownContainerStyle={{
          marginHorizontal: 20,
        }}
        maxHeight={350}
        language="TR"
      />
      <DropDownPicker
        placeholder="İlçe"
        open={open}
        searchable={true}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{
          flex: 1,
          paddingHorizontal: 20,
        }}
        dropDownContainerStyle={{
          marginHorizontal: 20,
        }}
        maxHeight={350}
        language="TR"
      />
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
