import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

function login(props){

   const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const save_data=()=>{

    let user = {

      email,password
    }

    console.log("user==>",user)
    Alert.alert('Credentials', `${email} + ${password}`);

  }


    return(
       

        

          <View style={styles.container}>

            <Text style={styles.logo}>LOGO</Text>
      
          <View  style={styles.inputfield}>
        <TextInput
         style={styles.input}
        
        value={email} onChangeText={(text)=>setEmail(text)} placeholder="Email"/ >
       
    
      <TextInput
       style={styles.input}
      
      secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>
        </View>

        <Text style={styles.forget}>Forgot Password?</Text>
       
          <Button style={styles.login} mode="contained" onPress={save_data} title="LOGIN">LOGIN</Button> 

          <Text style={{color:'blue',marginLeft:170,marginTop: 10,fontSize:15}}>OR</Text>

          <View style={styles.facebook}>
          <Button style={styles.fb} mode="contained" onPress={save_data} >
          <Text style={{color:'white',fontWeight:'200', fontSize:24,justifyContent:'center',marginLeft:10}}>  f </Text>
            </Button> 
            

          <Button style={styles.gm} mode="contained" onPress={save_data} >
          <Text style={{color:'black',fontWeight:'200', fontSize:24,justifyContent:'center',marginLeft:10}}>  G </Text>
            </Button> 

          </View>
        <View style={styles.reg}>
          <Text style={styles.account}>Don't Have an account?</Text>

          <Text style={styles.register} onPress={()=>props.navigation.navigate("register")}>Regiter Now</Text>
          

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
    // fontWeight:"800",
    alignSelf:"center",
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
    marginTop: 10,
  
    
  },
  fb:{
    width: '40%',
    height: 50,
    marginLeft:30,
    borderRadius:10,
    alignSelf:'center',
    textAlign:'center'
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
    marginLeft:100,
    marginTop:40

  },
  register:{
    color:'blue'
    
  },
  account:{
    color:'black'

  }
});

export default login