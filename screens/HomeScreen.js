import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

const styles = StyleSheet.create({
  soju: {
    width: 70,
    height: 130,
  }
});
const HomeScreen = () => {
    return (
      <View>
        <Draggable x={200} y={300} renderColor='red' renderText='B'/>
        <Draggable x={50} y={50}  renderSize={100} shouldReverse onShortPressRelease={()=>alert('touched!!')}>
          <Image style={styles.soju} source={require('../image/soju.png')} />
        </Draggable>
      </View>
    );
};

export default HomeScreen;