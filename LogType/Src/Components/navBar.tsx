import React, { useState,useEffect } from 'react';
import { View, TextInput, TextInputProps, TextStyle, Text } from 'react-native';
import { navBarStyle } from './navBarStyle.tsx';

interface navBarProps extends TextInputProps {
  placeholder1: string;
  textColor1?: string;
  textSize1?: number;
  hint1?: string;
}

const navBar: React.FC = () => {
 
 
 

  return (
    <View>
        
    <Text>
        hi
    </Text>
      

    </View>
  );
};

export default navBar;
