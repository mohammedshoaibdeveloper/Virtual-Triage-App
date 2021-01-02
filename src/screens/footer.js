import Ionicon  from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useState} from 'react';


import login from '../screens/login';
import register from '../screens/register';
import home from '../screens/home';
import opdhome from '../screens/opdhome';
import loginsignup from '../screens/loginsignup';
import signin from '../screens/signin';
import signup from '../screens/signup';
import otpverification from '../screens/otpverification';


const Tab = createMaterialBottomTabNavigator();

function footer() {
  return (
    <Tab.Navigator
     
      initialRouteName="loginsignup"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="home"
        component={loginsignup}
        options={{
            title:'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="signin"
        component={loginsignup}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: ({ color }) => (
            <Ionicon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={loginsignup}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ color }) => (
            <Ionicon name="md-calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={loginsignup}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Ionicon name="mail" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="loginsignup"
        component={loginsignup}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicon name="md-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default footer