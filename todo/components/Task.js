import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import styles from './styles'

const Task=(props)=>{
    const Delete=(index)=>{
        let anv=[...props.array]
        anv.splice(index,1)
        props.setarray(anv)

    }
    return(
        <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemsText}>{props.text} </Text>
            </View> 
            <TouchableOpacity style={styles.circular} onPress={()=>Delete(props.index)}></TouchableOpacity>           
        </View>
       
         )
}

export default Task;