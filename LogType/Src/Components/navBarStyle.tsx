import { StyleSheet } from 'react-native';

export const navBarStyle = StyleSheet.create({
  bar: {
    marginTop: 0,
    padding: 19,
    backgroundColor: 'white',
    borderRadius: 10,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 6,
    alignItems: 'center',
  },

  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    alignSelf: 'flex-start', 
  },
  title: {
    flex: 1, 
    fontFamily: 'Popins',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'dark-blue',
  },
  icon: {
    marginRight: 20, 
  },
  homeIcon: {
    color: 'blue',
  },
  gearIcon: {
    marginLeft: 'auto', 
  },
});
