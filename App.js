import { useState } from "react";
import { 
  StyleSheet,
  View,
  FlatList,
  Button } from 'react-native';
import { StatusBar } from "expo-status-bar";  

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {

  
  const [goalsList,setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);


  function toggleGoalAdd(){
    setModalIsVisible(prev=>!prev);
  }


  function addGoalHandler(enteredGoalText){
    setGoalsList(prev=>{
      return [...prev,{text: enteredGoalText, key: (Math.random() * 100).toString()} ];
    });
    toggleGoalAdd();
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
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button 
          title="Add New Goal" 
          color="#a065ec"
          onPress={toggleGoalAdd}
        />
      <GoalInput 
        onAddGoal={addGoalHandler}
        modalIsVisible={modalIsVisible}
        toggle = {toggleGoalAdd}
      />
      

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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1,
    backgroundColor: "#1e085a",
    
  },
  
  goalsContainer:{
    flex:5,
    
    
  },
  
});
