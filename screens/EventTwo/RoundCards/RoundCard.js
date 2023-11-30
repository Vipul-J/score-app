import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './RoundCard.styles';

const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.eventName}>{title}</Text>
    </TouchableOpacity>
  );
};

const RoundsCard = ({ navigation }) => {
  const rounds = [
    "Round 1: The talking titans!", 
    "Round 2: Roll and create", 
    "Round 3: The final talk!", 
  ];

  const handleCardPress = (title) => {
    if (title === "Round 1: The talking titans!") {
      navigation.navigate('TwoRoundOneScore');
    } else if (title === "Round 2: Roll and create") {
      navigation.navigate('TwoRoundTwoScore');
    } else if (title === "Round 3: The final talk!") {
      navigation.navigate('TwoRoundThreeScore');
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communication Rounds</Text>
      {rounds.map((round, index) => (
        <Card style={styles.eventName} key={index} title={round} onPress={() => handleCardPress(round)} />
      ))}
    </View>
  );
};

export default RoundsCard;
