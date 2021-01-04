import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'


function signin(props){

    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");
  
    const save_data=()=>{
  
      let user = {
  
        Username,password
      }
  
      console.log("user==>",user)
      // Alert.alert('Credentials', `${Username} + ${password}`);



      var formdata = new FormData();
        formdata.append("Username", Username);
        formdata.append("Password", password);
        formdata.append("Sender_ID", "cyZoJjr-RSOn-lRyLDcAW0:APA91bErkVp0nTX7URm5LApE_lhNLP6Pdb8G58vPNSYdPXyuoL7RRTt-Zr6r8LPDwfD6JGJ3WSJCiDM97X1Sk0Zv3-LHnjHF1SQoUt3eAW4HKrdavXgju-dEHjzHtsJcyZoJjr-RSOn-lRyLDcAW0:APA91bErkVp0nTX7URm5LApE_lhNLP6Pdb8G58vPNSYdPXyuoL7RRTt-Zr6r8LPDwfD6JGJ3WSJCiDM97X1Sk0Zv3-LHnjHF1SQoUt3eAW4HKrdavXgju-dEHjzHtsJcyZoJjr-RSOn-lRyLDcAW0:APA91bErkVp0nTX7URm5LApE_lhNLP6Pdb8G58vPNSYdPXyuoL7RRTt-Zr6r8LPDwfD6JGJ3WSJCiDM97X1Sk0Zv3-LHnjHF1SQoUt3eAW4HKrdavXgju-dEHjzHtsJ");
        formdata.append("Device_type", "android");

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/Ear_HEaalth_Api/Patient_LoginView", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          
            }


    return(
       

        

          <View style={styles.container}>
            <View style={{marginBottom:250}}>
           
            <Text style={{alignSelf:"center",fontSize:15,paddingTop:5,fontWeight:'50',padding:44,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5}}>Please enter the username & password you've created for your account </Text>

            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'250',fontWeight:'bold',color:'black',letterSpacing:2.5}}>My Credentials Is:</Text>

            <View  style={styles.inputfield}>
                <TextInput
                style={styles.input}
                
                value={Username} onChangeText={(text)=>setUsername(text)} placeholder="Username"/ >
            
            
            <TextInput
            style={styles.input}
            
            secureTextEntry={true} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>
        </View>
        
          </View>
        <View> 
        

        <Button style={styles.signin} mode="contained"title="LOGIN" onPress={save_data}><Text style={{letterSpacing:2.5,color:'black',fontWeight:'bold'}}>SIGN IN</Text></Button>

        </View>

           
            

          
      
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
    marginTop: 10,
    borderRadius:10,
    marginLeft:30,
    color:'blue'
  
    
    
  },
  signin: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'lightgrey'
  
    
    
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
  

  
});

export default signin