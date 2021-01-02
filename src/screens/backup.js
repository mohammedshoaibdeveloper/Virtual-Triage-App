import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';


function whatsapphome(props){

   


    return(
       

        

      <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
      <View style={styles.parentdiv}>
      <View style={styles.leftHeaderContainer}>
       <Text style={styles.logoText}>WhatsApp</Text>
       </View>
       <View style={styles.rightHeaderContainer}>
       <Icon name="search" color='#fff' size={23} style={{padding:5}} />
       
        <Icon name="more-vert" color='#fff' size={23} style={{padding:5}}/>
       </View>
      </View>
       <View style={styles.bottom}>
      
      <Text style={{color:'white',marginTop:1}}>CHATS</Text>
      <Text style={{color:'white',marginTop:1}}>STATUS</Text>
      <Text style={{color:'white',marginTop:1}}>CALLS</Text>
    </View>
       

      </View>
    
      <View style={styles.contentContainer}>
      </View>
     </View>

    
        

        

  )
}
const styles = StyleSheet.create({
  mainContainer: {
     flex: 1,
     backgroundColor: '#33373d',
     height: 34
  },
  headerContainer: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "space-between",
     backgroundColor: "#041821",
     alignItems:"center",
     paddingRight: 5
  },
  leftHeaderContainer: {
     alignItems: "flex-start",
     flexDirection: "row"
  },
  rightHeaderContainer: {
     alignItems: "flex-end",
     flexDirection: "row"
  },
  parentdiv:{
    alignItems:"flex-end",
     flexDirection:"row"
  },
  contentContainer: {
     flex: 5,
  },
  logoText: {
     color: "white",
     fontWeight: "bold",
     fontSize: 16,
     alignItems: "flex-start",
     marginLeft: 10
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-between',
  
  }
 });

export default whatsapphome