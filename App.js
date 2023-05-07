import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './commponets/Task';

export default function App() {

  const [task, setTask] = useState();
  const [item, setItem] = useState([]);
  

  const addTask = () => {
    setTask(null)
    setItem([...item,task])
  };

  const deleteItem = (index) => {
    let itemsCopy = [...item];
    itemsCopy.splice(index,1);
  setItem(itemsCopy);

  }

  return (
    <View style={styles.container}>

      <View style={styles.viewTitle}><Text style={styles.title}>TODAY'S TASKS</Text></View>
    <ScrollView>
      {
        item.map((item, index) => {
          return(
            <TouchableOpacity onPress={() => deleteItem(index)}>
            <Task text={item} key={index}/>
            </TouchableOpacity>
          )
        })
      }
</ScrollView>
      <View style={styles.inputplusView}>

       <TextInput placeholder='Type here...' style={styles.input} value={task} onChangeText={text => setTask(text)}/>

       <TouchableOpacity onPress={addTask}>
       <View style={styles.viewPlus}><Text>+</Text></View>
       </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgrey',
    padding:10
  
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    textShadowColor:'wite',
    textShadowRadius:10,
    textShadowColor:'white',
  },
  viewTitle:{
    justifyContent:'flex-start',
    marginVertical:50,
    marginLeft:20
  },
  taskContainer:{
    width:'100%',
    height:100,
  
    alignItems:'center',

  },
  taskView:{
    width:380,
    height:70,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:20,

  },
  circle:{
    width:20,height:20,
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'lightblue',
    borderRadius:4,
    marginLeft:20
  
  },
  dot:{
    borderWidth:1,
    borderColor:'lightblue',
    width:10,
    height:10,
    borderRadius:40
  },
  betweenView:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginRight:20
  },
  text:{
    marginRight:20
  },
  inputplusView:{
    bottom:30,
    position:'absolute',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  input:{
    width:250,
    height:50,
    borderWidth:1,
    borderColor:'black',
    borderRadius:20,
    backgroundColor:'white',
    marginLeft:20,
    paddingLeft:10,
    paddingRight:10
  },
  viewPlus:{
    marginRight:20,
    height:50,
    width:50,
    borderWidth:1,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  }

});
