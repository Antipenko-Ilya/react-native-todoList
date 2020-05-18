import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './Components/Navbar';
import { AddTodo } from './Components/AddTodo';
import { Todo } from './Components/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }
  return (
    <View>
      <Navbar title='Todo App' />
      <ScrollView style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View style={styles.wrap}>
          {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  wrap: {
    flexDirection: 'column-reverse'
  }
});
