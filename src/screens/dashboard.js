import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,Image} from 'react-native';
import { TextInput,Button,Searchbar  } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Ionicon  from 'react-native-vector-icons/Ionicons';
function dashboard(props){


  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  

    return(
       

        

          <View style={styles.container}>

          <View style={styles.container1}>

          <View>

          <Image style={{width:150,height:150,resizeMode:'contain',alignSelf:'center',position:'absolute',top:0}} source={require('../../assets/logo.png')} />
         
          
                  <Searchbar style={styles.search}
              placeholder="Book your Doctor"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />



            <View style={styles.circle} />
            
       </View> 
    </View> 
    <View style={styles.container2}>
      
      


      
    </View>
        

      
    </View>
        

        

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
  },
  container1: {
    backgroundColor:"#c53ae8",
    width:"100%",
    flex:1
 
  },
  container2: {
    flex: 1,
    backgroundColor:"white",
    width:"100%",
 
  },
  search:{
    position:'absolute',
    top:120,
    width:'90%',
    alignSelf:'center',
    backgroundColor:'transparent',
    borderColor:'white',
    borderRadius:8,
    borderWidth:0.5
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    position:'absolute',
    top:190,
    left:10
  },
 
 
});

export default dashboard