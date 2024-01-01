import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navBarStyle } from './navBarStyle.tsx';

interface NavBarProps {
  isHomePage: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isHomePage }) => {
  return (
    <View style={navBarStyle.bar}>
     
        <View style={navBarStyle.Item}>
        <TouchableOpacity>
          {isHomePage ? (
            <FontAwesome
              name="home"
              size={24}
              color="black"
              style={[navBarStyle.icon, navBarStyle.homeIcon]}
            />
          ) : (
            <FontAwesome
              name="arrow-left"
              size={24}
              color="black"
              style={[navBarStyle.icon]}
            />
          )}
          </TouchableOpacity>
          

          <Text style={[navBarStyle.title]}>Log-in</Text>

            <TouchableOpacity>
          <FontAwesome
            name="gear"
            size={24}
            color="black"
            style={[navBarStyle.icon, navBarStyle.gearIcon]}
          />
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default NavBar;
