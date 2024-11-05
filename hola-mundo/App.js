
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Header} from './Componentes/Header';
import {AddTask} from './Componentes/AddTask';
import {Tasks} from './Componentes/Tasks';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AddTask/>      
      <Tasks/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
