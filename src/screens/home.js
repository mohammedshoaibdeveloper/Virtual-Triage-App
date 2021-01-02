import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'


function home(props){

   


    return(
       

        

          <View style={styles.container}>
            

          <Button style={styles.login} mode="contained" onPress={()=>props.navigation.navigate("login")}  title="LOGIN">LOGIN</Button> 
          <Button style={styles.login} mode="contained" onPress={()=>props.navigation.navigate("register")}  title="LOGIN">REGISTER</Button> 
          <Button style={styles.login} mode="contained" onPress={()=>props.navigation.navigate("opdhome")} title="LOGIN">OPD</Button> 

      
    </View>
        

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },
  
  login: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 40,
    borderRadius:10,
    marginLeft:30,
    color:'blue'
  
    
    
  },
  
});

export default home