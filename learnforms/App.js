// import React from "react";
// import { Text, View, TextInput, Button } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// export default function App() {
//   const { control, handleSubmit, errors } = useForm();
//   return (
//     <View>
//       <Controller
//         control={control}
//         render={({ onChange, onBlur, value }) => (
//           <TextInput
//             style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="firstName"
//         rules={{ required: true }}
//         defaultValue=""
//       />
//       {errors.firstName && <Text>First Name is required.</Text>}
//       <Controller
//         control={control}
//         render={({ onChange, onBlur, value }) => (
//           <TextInput
//             style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="lastName"
//         rules={{ required: true, minLength: 8}}
//         defaultValue=""
//       />
//       {errors.lastName?.type === "required" && <Text>Last Name is required.</Text>}
//       {errors.lastName?.type === "minLength" && <Text>Minimum 8 characters are required</Text>}
//       <Button title="Submit" onPress={handleSubmit((data) => console.log(data))} />
//     </View>
//   );
// }




// import { StatusBar } from 'expo-status-bar';
 //import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App1() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React from 'react';
// import { useForm,useController } from 'react-hook-form';
// import { TextInput,Alert } from 'react-native';

// let render=0;

// const Input=({name,control})=>{
//   const {field}=useController({
//     control,
//     defaultVale:'',
//     name,
//   })
//   return(
//     <TextInput
//     value={field.value}
//     onChangeText={field.onChange}/>
//   )
// }

// export default function App() {
//   const { control, handleSubmit } = useForm();
//   const onsubmit = (data) => Alert.alert(JSON.stringify(data));
//   //console.log(data)
//   render++;  
//   return (
//     <View style={StyleSheet.container}>
//       <Text>First Name</Text>
//       <Input name="firstName" control={control}/>
//       <Text>Last Name</Text>
//       <Input name="lastName" control={control}/>
//       <Text>Render: {render}</Text>
//       <Button title="Submit" onPress={handleSubmit(onsubmit)}/>
//     </View>
//   );
// }

//////////////////////////////////////////////////////////////////////////
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showMessage = () => {
 
    Alert.alert('onPress Called...');
    console.log(email,password)
  
  }
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity       
        onPress={showMessage}>
       <Text>click</Text>
      </TouchableOpacity>
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});