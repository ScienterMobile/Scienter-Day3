import { StyleSheet, Dimensions } from 'react-native';
import AppbarImage from '../Images/Appbar.png';

export const navBarStyle= StyleSheet.create({
  bar: {
    position: 'relative',
    marginTop:0,
    padding:19,
    backgroundColor: 'white',
    borderRadius:10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },

});
