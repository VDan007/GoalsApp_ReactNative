import { useState } from "react";
import { 
  StyleSheet,
  View,
  FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {

  
  const [goalsList,setGoalsList] = useState([]);

  function addGoalHandler(enteredGoalText){
    setGoalsList(prev=>{
      return [...prev,{text: enteredGoalText, key: (Math.random() * 100).toString()} ];
    });
    
  };

  function deleteGoalHandler(id){
    setGoalsList(
      prev => {
        return prev.filter(
          item => item.key !== id
        );
      }
    );
    
  }
  
  

  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHandler} />
     

      <View
         style={styles.goalsContainer}
      >
        <FlatList 
          data={goalsList} 
          renderItem={(itemData) =>{ 
            return <GoalItem onDeleteItem={deleteGoalHandler} key={itemData.item.key} id={itemData.item.key} text={itemData.item.text}/>;
          }}
        />
      </View>
      


    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1,
    
  },
  
  goalsContainer:{
    flex:5,
    
    
  },
  
});
