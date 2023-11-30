import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  tableContainer:{
    shadowColor: '#3e4095',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    marginTop: 32,
    textAlign: 'center',
    color:'#3e4095',
    textDecorationLine: 'underline'
  },
  columnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    paddingBottom: 10,
  },
  columnHeaderItem: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  teamName: {
    flex: 2,
    fontSize: 16,
    paddingLeft: 5,
    color:'#3e4095',
    fontWeight: 'bold'
  },
  scoreInputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scoreInput: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  scoreText: {
    flex: 1,
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
