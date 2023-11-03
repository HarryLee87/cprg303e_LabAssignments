/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App(): JSX.Element {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);


  return (
    <SafeAreaView>      
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}


export default App;
