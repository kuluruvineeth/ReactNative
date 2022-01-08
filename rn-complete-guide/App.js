import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals,enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 10
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:800,
    borderBottomColor:'black',
    borderBottomWidth:1,padding:10
  }

});
