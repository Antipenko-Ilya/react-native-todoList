import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = (props) =>  {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: '#3949ab',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
