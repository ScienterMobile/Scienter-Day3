import React, { useState } from 'react';
import {  View, Text, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform,  
  useNavigation, useState as useStateImport, backgroundImage,   } from '../Imports/imports';

import { logScreenStyles } from '../Styles/logScreenStyles';

import MainTextInput  from '../Components/mainTextInput'; 
import ErrorModal from '../Components/errorModal';
import NavBar from '../Components/navBar';

const LogScreen: React.FC = () => {


  const navigation = useNavigation();
  const [username, setUsername] = useStateImport<string>('');
  const [email, setEmail] = useStateImport<string>('');
  const [password, setPassword] = useStateImport<string>('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState<boolean>(false);
  const [isHomePage, setisHomePage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = () => {
    try {
      
      if (!username || !email || !password) {
        setErrorMessage('Please fill in all fields..!!!');
        setIsErrorModalVisible(true);
        return;
      }

      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
      setIsErrorModalVisible(true);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  const closeErrorModal = () => {
    setIsErrorModalVisible(false);
  };



  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={logScreenStyles.backgroundImage}>
     

      <NavBar isHomePage={true} isPage={''} />

        <View style={logScreenStyles.container  as any}>

         
        


        <MainTextInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          hint="Please enter a username"
          
        />



        <MainTextInput
          hint="Please enter a valid email address"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          textColor='red'
          
        />

        <MainTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          textColor='black'
          hint="Please enter a valid Password"
        />

          <View style={logScreenStyles.bcontainer as any} >
          <TouchableOpacity style={logScreenStyles.buttonL as any} onPress={handleLogin}>
            <Text style={logScreenStyles.buttonText as any }>Log in</Text>
          </TouchableOpacity>

          <Text style={logScreenStyles.signup as any }>Don't have an account?</Text>

          <TouchableOpacity style={logScreenStyles.buttonS as any} onPress={() => navigation.navigate('sign-up' as never)}>
            <Text style={logScreenStyles.buttonText as any}>Sign Up</Text>
          </TouchableOpacity>

          </View>

        </View>
        <ErrorModal
            isVisible={isErrorModalVisible}
            message={errorMessage}
            onClose={closeErrorModal}
          />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LogScreen;
