import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../EventOne/EventOne.styles';

const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const EventOne = ({ navigation }) => {
  const handleCardPress = (title) => {
    if (title === "Round 1") {
      navigation.navigate('ScoreRound');
    } else if (title === "Round 2") {
      navigation.navigate('LinkScreenRound2');
    } else if (title === "Round 3") {
      navigation.navigate('LinkScreenRound3');
    }
    // Add more conditions for other titles as needed
  };

  return (
    <View style={styles.container}>
      <Card title="Round 1" onPress={() => handleCardPress("Round 1")} />
      <Card title="Round 2" onPress={() => handleCardPress("Round 2")} />
      <Card title="Round 3" onPress={() => handleCardPress("Round 3")} />
    </View>
  );
};



export default EventOne;
