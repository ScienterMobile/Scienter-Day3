import { StyleSheet } from 'react-native';

export const navBarStyle = StyleSheet.create({
  bar: {
    marginTop: 0,
    padding: 19,
    backgroundColor: 'rgba(30,120,155,0.9)',
    borderRadius: 3,
    borderBottomColor: 'rgba(40,61,125,0.7)',
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
    fontFamily: 'poppins-regular',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginRight: 20, 
    color: 'white',
  },
  homeIcon: {
    color: 'white',
  },
  gearIcon: {
    marginLeft: 'auto', 
    color: 'white',
  },
});
