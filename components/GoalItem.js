import { StyleSheet, View, Text, Pressable, } from "react-native";

function GoalItem(props){

    function deleteI(){
       props.onDeleteItem(props.id);
      
    }

    return(
      <Pressable 
         
        onPress={deleteI}
        style={(pressData)=>pressData.pressed && styles.pressedItem}
      >
         <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
    );
}

export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
    goalText: {
        color: "white",
      },
    pressedItem: {
      opacity: 0.5,
    },

});