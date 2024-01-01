import React, { useState,useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { navBarStyle } from './navBarStyle.tsx';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform,  
    useNavigation, useState as useStateImport, backgroundImage,AppbarImage   } from '../Imports/imports';

interface navBarProps extends TextInputProps {

}

const navBar: React.FC = () => {
 
 
 

  return (
    <View style={[navBarStyle.bar]} >

       <ImageBackground source={AppbarImage} style={navBarStyle.backgroundImage}>
   
    </ImageBackground>
    
    <Text>
        hi
    </Text>

    </View>
  );
};

export default navBar;
