import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  console.log(text)
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Testing the long distance capability</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => Alert.prompt("Button clicked!")}
        title="Test Prompt Button"
        color="#841584"
      />
      <TextInput
        style={{ borderWidth: 1, height: 40, padding: 10 }}
        onChangeText={setText}
        placeholder='Type in your name'
      />
      <Text>Hello {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

