import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={4} onPress={handlePress}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusantium veritatis doloribus ex, quia esse earum voluptas fugiat deserunt in eligendi suscipit alias possimus, vel dolores aspernatur voluptates eius repudiandae.</Text>
      <Image source={require('./assets/icon.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});