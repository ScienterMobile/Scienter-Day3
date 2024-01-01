import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navBarStyle } from './navBarStyle.tsx';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation from @react-navigation/native

interface NavBarProps {
  isHomePage: boolean;
  isPage: string;
}

const NavBar: React.FC<NavBarProps> = ({ isHomePage,isPage }) => {
  const navigation = useNavigation();  

  return (
    <View style={navBarStyle.bar}>
      <View style={navBarStyle.Item}>
        
          {isHomePage ? (
            <TouchableOpacity onPress={() => navigation.navigate('log-in' as never)}>
            <FontAwesome
              name="home"
              size={24}
              color="black"
              style={[navBarStyle.icon, navBarStyle.homeIcon]}
            />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate(isPage as never)}>
            <FontAwesome
              name="arrow-left"
              size={24}
              color="black"
              style={[navBarStyle.icon]}
            />
             </TouchableOpacity>
          )}
        

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
