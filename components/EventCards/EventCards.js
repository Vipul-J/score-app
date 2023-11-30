import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './EventCard.styles';

const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.eventName}>{title}</Text>
    </TouchableOpacity>
  );
};

const EventCard = ({ navigation }) => {
  const titles = [
    "TANTRA KALA (Art)",
    "SAMPRAVADANA (Communication)",
    "BRUHAMANCH (Digital Quiz)",
    "ALANKRUTA (Digital Designing)",
    "VIBHRAM (Gaming)"
  ];

  const handleCardPress = (title) => {
    switch (title) {
      case "TANTRA KALA (Art)":
        navigation.navigate('EventOneRounds');
        break;
      case "SAMPRAVADANA (Communication)":
        navigation.navigate('CommLogin');
        break;
      case "BRUHAMANCH (Digital Quiz)":
        navigation.navigate('EventThree');
        break;
      case "ALANKRUTA (Digital Designing)":
        navigation.navigate('EventFour');
        break;
      case "VIBHRAM (Gaming)":
        navigation.navigate('EventFive');
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>ABHIGYAN 1.0 - Sub Events</Text>
        {titles.map((title, index) => (
          <Card key={index} title={title} onPress={() => handleCardPress(title)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default EventCard;
