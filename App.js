
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './comonents/GoalItem';
import GoalInput from './comonents/GoalInput';

export default function App() {

  const [modalIsVsible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString }]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

 
  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' color="red" onPress={startAddGoalHandler}/>
     {modalIsVsible && <GoalInput onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList keyExtractor={(id) => { id.toString(); }} data={courseGoals} renderItem={(itemData) => {
          itemData.index
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 20,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "blue",
    padding: 8,
  },
  goalText: {
    color: 'white'
  }
});
