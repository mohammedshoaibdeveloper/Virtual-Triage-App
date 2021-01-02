import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,ScrollView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'


function signup(props){
    const [email,setemail] = useState("");
    const [username,setUsername] = useState("");
    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
   
    const [phonenumber,setphonenumber] = useState("");
    const [ohipnumber,setohipnumber] = useState("");
    const [startdate,setstartdate] = useState("");
    const [enddate,setenddate] = useState("");
    
    const [password,setPassword] = useState("");
  
    const save_data=()=>{
  
      let user = {
  
        username,password
      }
  
      console.log("user==>",user)
      Alert.alert('Credentials', `${username} + ${password}`);
  
    }


    return(
       

        
            <ScrollView>
          <View style={styles.container}>
            <View >
            <Text style={{alignSelf:"center",fontSize:20,fontWeight:'200',fontWeight:'bold',color:'black',letterSpacing:1.5,marginLeft:20}}>Please leave contact details:</Text>
           
            <Text style={{alignSelf:"center",fontSize:14,paddingTop:5,fontWeight:'50',padding:34,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5}}>In case you need to be contacted about your service </Text>

           

            <View  style={styles.inputfield}>
                <TextInput
                style={styles.input}
                
                value={email} onChangeText={(email)=>setemail(email)} placeholder="Email address"/ >
            
            
            <TextInput
            style={styles.input}
            
             placeholder="Username" value={username} onChangeText={(username)=>setusername(username)}/>

            <TextInput
                style={styles.input}

                
                value={firstname} onChangeText={(firstname)=>setfirstname(firstname)} placeholder="Firsrt Name"/ >

                <TextInput
                style={styles.input}
                
                value={lastname} onChangeText={(lastname)=>setlastnamee(lastname)} placeholder="Last Name"/ >
                     <TextInput
                style={styles.input}
                
                value={phonenumber} keyboardType = 'numeric' onChangeText={(phonenumber)=>setphonenumber(phonenumber)} placeholder="Phone Number"/ >

                <TextInput
                style={styles.input}
                
                value={ohipnumber} keyboardType = 'numeric' onChangeText={(ohipnumber)=>setohipnumber(ohipnumber)} placeholder="Ohip Number"/ >
                    <TextInput
                style={styles.input}
                
                value={startdate} onChangeText={(startdate)=>setstartdate(startdate)} placeholder="Select Date of issue"/ >

            <TextInput
                style={styles.input}
                
                value={enddate} onChangeText={(enddate)=>setenddate(enddate)} placeholder="Select Date of Expiry"/ >
            
            
            <TextInput
            style={styles.input}
            
            secureTextEntry={true} placeholder="Set Password" value={password} onChangeText={(password)=>setPassword(password)}/>


              <Button style={styles.signin} mode="contained"title="LOGIN" onPress={()=>props.navigation.navigate("otpverification")}><Text style={{letterSpacing:2.5,color:'white',fontWeight:'bold'}}>CREATE AN ACCOUNT</Text></Button>
        </View>
        
          </View>
        
        

      

     

           
            

          
      
    </View>
    </ScrollView>

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },


  signin: {
    width: 300,
    height: 54,
    padding: 10,
    marginTop: 10,
    borderRadius:10,
    marginLeft:10,
    backgroundColor:'#c53ae8'
  
    
    
  },
  inputfield:{
  
    margin:22,
    marginTop:2,
    
  
   

  },
  input: {
    width: 320,
    height: 44,
    padding: 5,
    marginBottom: 20,
    backgroundColor:'transparent',
    
    
  
    
    
  },
  

  
});

export default signup