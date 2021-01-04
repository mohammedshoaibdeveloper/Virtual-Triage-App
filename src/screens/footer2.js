import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet} from 'react-native';
import Ionicon  from 'react-native-vector-icons/Ionicons';


function Footer2(props){




    return(
       

        

          <View style={styles.container}>
              <View style={{position:'absolute',bottom:0,backgroundColor:'blue',width:'100%',height:'8%'}}>
              <View style={{flexDirection:'row',position:'absolute',top:12,width:'100%',alignSelf:'center',left:20}}>
                  <View style={{width:'20%'}}>
            <Ionicon name="home"  size={30} color={'white'}  />
            </View>
            <View style={{width:'20%'}}>
            <Ionicon name="search"  size={30} color={'white'} />
            </View>
            <View style={{width:'20%'}}>
            <Ionicon name="md-calendar" size={30} color={'white'} />
            </View>
            <View style={{width:'20%'}}>
            <Ionicon name="mail"  size={30} color={'white'} />
            </View>
            <View style={{width:'20%'}}>
             <Ionicon name="md-person"  size={30} color={'white'} />
             </View>
             </View>

              </View>
            

        </View>

           
            

          
      
    
        

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },

  
  

  
});

export default Footer2