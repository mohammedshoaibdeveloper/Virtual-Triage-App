import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import login from '../screens/login';
import register from '../screens/register';
import home from '../screens/home';
import opdhome from '../screens/opdhome';
import loginsignup from '../screens/loginsignup';
import signin from '../screens/signin';
import signup from '../screens/signup';
import otpverification from '../screens/otpverification';
import footer from '../screens/footer';
import Footer2 from '../screens/footer2';
import dashboard from '../screens/dashboard';
import search from '../screens/search';
import appointments from '../screens/appointments';
import chat from '../screens/chat';
import profile from '../screens/profile';





const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="opdhome" options={{ headerShown: false }} component={opdhome} />
      <Stack.Screen name="signin" options={{ title: 'Patient sign in' }}  component={signin} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} component={dashboard} />



        <Stack.Screen name="signup" options={{ title: 'Patient sign up' }}  component={signup} />
      <Stack.Screen name="otpverification" options={{ title: 'Patient otp verification' }}  component={otpverification} />





      <Stack.Screen name="search" options={{ headerShown: false }} component={search} />
      <Stack.Screen name="appointments" options={{ headerShown: false }} component={appointments} />
      <Stack.Screen name="chat" options={{ headerShown: false }} component={chat} />
      <Stack.Screen name="profile" options={{ headerShown: false }} component={profile} />

      <Stack.Screen name="footer" options={{ headerShown: false }} component={footer} />



      <Stack.Screen name="home" options={{ headerShown: false }} component={home} />
        <Stack.Screen name="login" options={{ headerShown: false }} component={login} />
        <Stack.Screen name="register" options={{ headerShown: false }} component={register} />

        <Stack.Screen name="loginsignup" options={{ headerShown: false }} component={loginsignup} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
