import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button, Searchbar } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Footer2 from '../screens/footer2';
function dashboard(props) {


  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (




    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
        <View style={styles.container}>


          <View style={styles.container1}>

            <View>

              <Image style={{ width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center' }} source={require('../../assets/logo.png')} />


              <Searchbar style={styles.search}
                placeholder="Book your Doctor"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />

              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.circlecontainer}>

                <View style={{ alignItems: 'center' }}>
                  <View style={styles.circle} />
                  
                  <Text style={styles.Speciality}>Speciality</Text>
                </View><View style={{ alignItems: 'center' }}>

                  <View style={styles.circle} />

                  <Text style={styles.Speciality}>Speciality</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View style={styles.circle} />
                  <Text style={styles.Speciality}>Speciality</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View style={styles.circle} />
                  <Text style={styles.Speciality}>Speciality</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View style={styles.circle} />
                  <Text style={styles.Speciality}>Speciality</Text>
                </View>

              </ScrollView>

            </View>
          </View>
          <View style={styles.container2}>

            <Text style={{ top: 10, fontSize: 30, fontWeight: 'bold', left: 15, letterSpacing: 1.5 }}>Recommended</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.boxcontainer}>

              <View style={{ alignItems: 'center' }}>
                <View style={styles.box} >
                <Image style={{ width: 2000, height: 150, resizeMode: 'contain', alignSelf: 'center',borderRadius: 35 }} source={require('../../assets/img1.jpg')} />

                  <View style={styles.innerbox} />
                </View>

                <Text style={styles.Speciality}>Speciality</Text>
              </View>

              <View style={{ alignItems: 'center' }}>

                <View style={styles.box} >
                <Image style={{ width: 2000, height: 150, resizeMode: 'contain', alignSelf: 'center',borderRadius: 35 }} source={require('../../assets/img1.jpg')} />
                  <View style={styles.innerbox} /></View>

                <Text style={styles.Speciality}>Speciality</Text>
              </View>
              <View style={{ alignItems: 'center' }}>

                <View style={styles.box} >
                <Image style={{ width: 2000, height: 150, resizeMode: 'contain', alignSelf: 'center',borderRadius: 35 }} source={require('../../assets/img1.jpg')} />
                  <View style={styles.innerbox} /></View>

                <Text style={styles.Speciality}>Speciality</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.box} >
                <Image style={{ width: 2000, height: 150, resizeMode: 'contain', alignSelf: 'center',borderRadius: 35 }} source={require('../../assets/img1.jpg')} />
                  <View style={styles.innerbox} /></View>

                <Text style={styles.Speciality}>Speciality</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.box} >
                <Image style={{ width: 2000, height: 150, resizeMode: 'contain', alignSelf: 'center',borderRadius: 35 }} source={require('../../assets/img1.jpg')} />
                  <View style={styles.innerbox} /></View>

                <Text style={styles.Speciality}>Speciality</Text>
              </View>

            </ScrollView>

          </View>
        </View>
      </ScrollView>

      <Footer2 />

    </View>




  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container1: {
    backgroundColor: "#c53ae8",
    width: "100%",

  },
  container2: {
    backgroundColor: "white",
    width: "100%",

  },
  search: {

    width: '90%',
    alignSelf: 'center',
    borderColor: 'white',

    borderWidth: 0.5,

  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    alignItems: 'center',

    margin: 5,

  },
  circlecontainer: {

    paddingVertical: 20,



  },
  Speciality: {

    fontSize: 15,
    fontWeight: '200',
    color: 'white'
  },
  box: {
    width: 200,
    height: 150,

    backgroundColor: "blue",

    margin: 5,
    borderRadius: 12

  },
  innerbox: {
    width: 60,
    height: 50,

    backgroundColor: "black",


    margin: 5,
    borderRadius: 4,
    position: 'absolute',
    right: 0,
    opacity: 0.5

  },
  boxcontainer: {
    paddingVertical: 20,
    marginStart: 10


  },
  Speciality: {

    fontSize: 15,
    fontWeight: '200',
    color: 'black'
  },



});

export default dashboard