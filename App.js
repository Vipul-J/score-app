import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EventsCard from './components/EventCards/EventCards'; // Import your EventsCard component here
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RoundsCard from './screens/EventTwo/RoundCards/RoundCard';
import TwoScoreOne from './screens/EventTwo/scoreList/TwoScoreOne';
import TwoScoreTwo from './screens/EventTwo/scoreList/TwoScoreTwo';
import TwoScoreThree from './screens/EventTwo/scoreList/TwoScoreThree';
import Home from './components/SplashScreen/Home';
 import Login from './screens/EventTwo/Login/Login';
 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
           <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Events" component={EventsCard} /> 

        {/* Communication */}
        <Stack.Screen name="CommLogin" component={Login} /> 
        <Stack.Screen name="EventTwoRounds" component={RoundsCard} /> 
        <Stack.Screen name="TwoRoundOneScore" component={TwoScoreOne} /> 
        <Stack.Screen name="TwoRoundTwoScore" component={TwoScoreTwo} /> 
        <Stack.Screen name="TwoRoundThreeScore" component={TwoScoreThree} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



