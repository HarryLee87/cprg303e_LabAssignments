/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';



function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) =>{
    if(tasks.includes(taskText)){
      Alert.alert('Same task is existed on the list!')
    } else{
      setTasks([...tasks, taskText]);
    }
    
  };


  return (
    <SafeAreaView>      
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}


export default App;
