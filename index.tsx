import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import Title from '../components/Title';

export default function Index() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim()) {
      setTasks([...tasks, { text: task, checked: false }]);
      setTask('');
    }
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Title>Tarefas</Title>
      <View style={styles.row}>
        <Input
          value={task}
          onChangeText={setTask}
          placeholder="Digite uma tarefa"
        />
        <Button onPress={addTask}>Adicionar</Button>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            text={item.text}
            checked={item.checked}
            onToggle={() => toggleTask(index)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16
  }
});
