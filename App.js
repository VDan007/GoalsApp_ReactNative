import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoalText,setEnteredGoalText] = useState("");
  const [goalsList,setGoalsList] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    setGoalsList(prev=>{
      return [...prev,enteredGoalText];
    });
    
  };
  console.log(goalsList);
  return (
    <View style={styles.appContainer}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          />

        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>

      <View
        style={styles.goalsContainer}
      >
        <Text>List of Goals</Text>
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
  inputContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    

  },
  textInput:{
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight:8,
    padding: 8,
  },
  goalsContainer:{
    flex:5,
    
  }
});
