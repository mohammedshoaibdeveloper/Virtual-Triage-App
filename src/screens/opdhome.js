import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,TouchableOpacity,Modal,TouchableHighlight} from 'react-native';
import { TextInput,Button,BottomNavigation } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Modal from 'react-native-modal';



function whatsapphome(props){

  const [modalVisible, setModalVisible] = useState(false);

  const Doctor=()=>{
    Alert.alert('Coming Soon');
  }


    return(
       

        

      <View style={styles.mainContainer}>
        <View style={{alignSelf:'center',flexDirection:'row'}}>
        
        <Button style={styles.button} mode="contained" onPress={() => {
          setModalVisible(true);
        }}><Text style={styles.text} >PATIENT</Text></Button> 
        <Button style={styles.button} mode="contained" onPress={Doctor}><Text style={styles.text} >DOCTOR</Text></Button> 
        </View>

         <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Register your self</Text>
            <View style={styles.modalB}>
            <Button style={styles.modalbutton} mode="contained"  onPress={()=>{
              props.navigation.navigate("loginsignup")
              setModalVisible(!modalVisible)
              }}>SIGNIN</Button> 
            <Button style={styles.modalbutton} mode="contained"  onPress={()=>{
              props.navigation.navigate("signup")
              setModalVisible(!modalVisible)
            }}>SIGNUP</Button> 
          </View>

            <TouchableHighlight
              
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{fontsize:'35',color:'#c53ae8',marginTop:10}}  onPress={()=>{
              props.navigation.navigate("dashboard")
              setModalVisible(!modalVisible)
            }}>
              Skip Now</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      
    </View>
      
     </View>

    
        

        

  )
}
const styles = StyleSheet.create({
  mainContainer: {
     flex: 1,
     backgroundColor: '#c53ae8',
    flexDirection:'row',
     justifyContent: 'center',
     alignItems:'center'
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    padding: 10,
    borderRadius:10,
    borderColor:'white',
    marginLeft:30,
    backgroundColor:'#c53ae8',
    borderColor:'white',
    borderWidth:1,
    alignItems:'center',
    marginLeft:14
    
  
    
    
  },
  text:{
    fontWeight: 'bold',
    fontSize:20,
    

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#c53ae8",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize:20,
    letterSpacing:1.5
  },
  modalbutton:{
    width:230,
    height: 54,
    padding: 10,
    marginTop: 12,
    borderRadius:10,
    marginLeft:30,
    backgroundColor:'#c53ae8',
    letterSpacing:1.5
    
  },
  modalB:{
    justifyContent: 'center',

  }
 
  
  
 });

export default whatsapphome