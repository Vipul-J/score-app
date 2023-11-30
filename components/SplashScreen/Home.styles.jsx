import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: windowWidth, // Ensure container spans the width of the screen
    backgroundColor: '#FFFFFF',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
     marginTop: 32,
    textAlign: 'center',
    color:'#3e4095',
    textDecorationLine: 'underline'
  },
  subtitle:{
    fontSize: 24,
    fontWeight: 'bold', 
    textAlign: 'center',
    color:'#3e4095',
    textDecorationLine: 'underline'
  }, 
});

export default styles;