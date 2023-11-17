import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainLayout from '../layouts/MainLayout';
import {Button, Alert, View} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = taskText => {
    if (tasks.includes(taskText)) {
      Alert.alert('Same task is existed on the list!');
    } else {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <View style={{marginTop: 20}}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            color="black"
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
