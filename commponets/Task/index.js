import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (text) => {

  return (
      <View style={styles.taskContainer}>
        <View style={styles.taskView}>
          <View style={styles.circle}></View>
          <View style={styles.betweenView}>
            <Text style={styles.text}>{text.text}</Text>
            <View style={styles.dot}></View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop:20

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
});
export default Task;