import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task"


export default function App() {
  const [task, setTask]=useState("");
  const [taskitems, setTaskitems]=useState([]);
  const handleAddTask=()=>{
    // console.log(task)
    Keyboard.dismiss();
    setTaskitems([...taskitems, task])
    setTask("")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>
      </View>
      <View style={styles.items}>
        {/* <Task text={"task1"}/>
        <Task text={"task2"}/> */}
        {taskitems.map((e,index)=>{
          return(
            <TouchableOpacity key={index}>
              <Task text={e} index={index} array={taskitems} setarray={setTaskitems}/>
            </TouchableOpacity>
          )
        })}
      </View>
      {/* <StatusBar style="auto" /> */}
<KeyboardAvoidingView style={styles.writeTaskwrapper}>
  <TextInput style={styles.input} placeholder={"write a task todo"} value={task} onChangeText={text => setTask(text)}></TextInput>

<TouchableOpacity onPress={()=>handleAddTask()}>
  <View style={styles.addwrapper}>
    <Text style={styles.addText} >+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',   
  },
  tasksWrapper:{
    // paddingTop:80,
    // paddingHorizontal:20
    padding:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,

  },
  writeTaskwrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderwidth:1,
    width:250,

  },
  addwrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderwidth:1,
  }


});
