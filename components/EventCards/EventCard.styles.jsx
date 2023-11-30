import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    width: windowWidth, // Ensure container spans the width of the screen
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    marginTop: 32,
    textAlign: 'center',
    color:'#3e4095',
    textDecorationLine: 'underline'
  },
  card: {     
    width: '55%',  
    aspectRatio: 1,  
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 4,
    marginTop: 4,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3e4095',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;