import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navBarStyle } from './navBarStyle.tsx';

const NavBar: React.FC = () => {
  return (
    <View style={[navBarStyle.bar]}>
      <View style={[navBarStyle.Item]}>
        <FontAwesome
          name="home"
          size={24}
          color="black"
          style={[navBarStyle.icon, navBarStyle.homeIcon]}
        />

        <Text style={[navBarStyle.title]}>Log-in</Text>

        <FontAwesome
          name="gear"
          size={24}
          color="black"
          style={[navBarStyle.icon, navBarStyle.gearIcon]}
        />
      </View>
    </View>
  );
};

export default NavBar;
