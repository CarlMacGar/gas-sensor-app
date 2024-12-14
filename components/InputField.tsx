import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, TextInput } from './Themed';

export default function InputField({ label }: {label:string}) {
    const [text, setText] = useState('');

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {label}
        </Text>
        <TextInput
            style={styles.textInput}
            placeholder="Escribe aquí"
            onChangeText={setText}
            value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'baseline',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});