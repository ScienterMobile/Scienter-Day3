/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeModules, Platform} from 'react-native';

AppRegistry.registerComponent(appName, () => App);

const {NavigationBarColor} = NativeModules;

const changeNavigationBarColor = (
  color = String,
  light = false,
  animated = true,

  ) => {
  if (Platform.OS === 'android') {
    const LightNav = light ? true : false;
    NavigationBarColor.changeNavigationBarColor(color, LightNav, animated);
  }
};
  
export {changeNavigationBarColor};