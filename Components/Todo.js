import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Todo = ({todo}) =>  {
  return (
      <View style={styles.todo}>
           <Text>{todo.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    todo: {
        fontSize: 20,
        borderColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        marginBottom: 10
      }
});
