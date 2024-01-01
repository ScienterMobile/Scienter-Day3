import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogScreen, SignupScreen, SplashScreen, Image, AppbarImage } from '../Imports/imports';
import {LOG_IN,SIGN_up} from '../Navigator/constonts'


const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
       
       
        /*screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0.6,
            borderColor: '#fff',
            borderBottomWidth: 3,
            borderTopWidth: 3,
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30,
            fontFamily: 'Arial',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={AppbarImage}
              style={{ flex: 1, width: '300%', height: '100%', resizeMode: 'cover' }}
            />
          ),
        }} comment that default navigation bar and I include custmize navibar*/


      > 
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name={LOG_IN} component={LogScreen} options={{ headerShown: false }} />
        <Stack.Screen name={SIGN_up} component={SignupScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
