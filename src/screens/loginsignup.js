import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'
import Footer2 from '../screens/footer2';

function loginsignup(props){

   


    return(
       

        

          <View style={styles.container}>
            <View style={{position:'absolute',top:14}}>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:'300',fontWeight:'bold',color:'black',letterSpacing:2.5,textAlign:'center'}}>VIRTUAL TRIAGE:</Text>
            <Text style={{alignSelf:"center",fontSize:15,paddingTop:15,fontWeight:'50',padding:40,color:'grey',fontFamily: 'sans-serif',letterSpacing:2.5,textAlign:'center'}}>Already have an account so please Login to your account otherwise register first</Text>

            <View>
            <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("signin")}>LOGIN</Button> 
          <Button style={styles.login} mode="contained"   title="LOGIN" onPress={()=>props.navigation.navigate("signup")}>SIGNUP</Button>
          </View>
          </View>
        <View style={{position:'absolute',bottom:35}}> 
           <Text style={{alignSelf:"center",fontSize:15,paddingTop:13,fontWeight:'50',padding:32,color:'grey',fontFamily: 'sans-serif',letterSpacing:1.5,textAlign:'center'}}>VIRTUAL TRIAGE uses your details for appointment booking purpose we want send email or post anything anyyour wall without you opting in first.</Text> 
           

        </View>

           
            

          <Footer2 />
      
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
    marginTop: 20,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#c53ae8'
  
    
    
  },
  

  
});

export default loginsignup