import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'


function register(props){

   const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    const [name,setName] = useState("");

  const save_data=()=>{

    let user = {

      email,password,name
    }

    console.log("user==>",user)
    Alert.alert('Credentials', `${email} + ${password}`);

  }


    return(
       

        

          <View style={styles.container}>
            

            <Text style={styles.logo}>Register</Text>
      
          <View  style={styles.inputfield}>
          <TextInput
         style={styles.input}
        
        value={email} onChangeText={(name)=>setName(name)} placeholder="Name"/ >
        <TextInput
         style={styles.input}
        
        value={email} onChangeText={(text)=>setEmail(text)} placeholder="Email"/ >
       
    
      <TextInput
       style={styles.input}
      
      secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>
        </View>

       
       
          <Button style={styles.login} mode="contained" onPress={save_data} title="LOGIN">REGISTER</Button> 

         

          <View style={styles.facebook}>
          <Button style={styles.fb} mode="contained" onPress={save_data} title="LOGIN">
          <Text style={{color:'white',fontWeight:'200', fontSize:24,justifyContent:'center',marginLeft:10}}>  f </Text>
            </Button> 
            

          <Button style={styles.gm} mode="contained" onPress={save_data} title="LOGIN"> 
          <Text style={{color:'black',fontWeight:'200', fontSize:24,justifyContent:'center',marginLeft:10}}>  G </Text></Button> 

          </View>
        <View style={styles.reg}>
          <Text style={styles.account}>By registering you agree to</Text>

          <Text style={styles.register}>Terms & condition</Text>
          

          </View>


        
      
      
      
    </View>
        

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },
  inputfield:{
  
    margin:22,
  
   

  },
  input: {
    width: 320,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'transparent',
    
    
  
    
    
  },
  login: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 10,
    borderRadius:10,
    marginLeft:30,
    color:'blue'
  
    
    
  },
  logo:{
    fontSize:28,
    fontWeight:"800",
    marginLeft:30,
    marginBottom:56,
    
    fontWeight: "bold"
  },
  forget:{
    marginLeft:215,
    color:'blue'

  },
  facebook:{
   
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 15,
  
    
  },
  fb:{
    width: '40%',
    height: 50,
    marginLeft:30,
    borderRadius:10,
  },
  gm:{
    width: '40%',
    height: 50,
    marginRight:30,
    borderRadius:10,
    backgroundColor:'white',
    
  },
  reg:{
    flexDirection:'row',
    marginLeft:50,
    marginTop:40

  },
  register:{
    color:'blue',
    fontSize:14
    
  },
  account:{
    color:'black',
    fontSize:14

  }
});

export default register