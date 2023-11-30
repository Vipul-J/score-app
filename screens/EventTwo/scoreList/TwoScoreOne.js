import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image } from 'react-native';
import axios from 'axios';
import styles from './TwoScore.styles';

const TwoScoreOne = () => {
  const teamNames = [
    'Lightning Strikers',
    'Phoenix Warriors',
    'Arctic Tigers',
    'Thunderbolts',
    'Fire Dragons',
    'Shadow Ninjas',
    'Frost Giants',
    'Golden Eagles',
    'Silver Wolves',
    'Red Phoenixes',
    'Sapphire Sabers',
    'Emerald Titans',
    'Crimson Lions',
    'Azure Angels',
    'Platinum Panthers',
    'Steel Sharks',
    'Neon Knights',
    'Mystic Mermaids',
    'Electric Falcons',
  ];

  const [teams, setTeams] = useState(
    teamNames.map((team) => ({ name: team, score50: '', score100: '' }))
  );

  const handleScoreChange = (index, input, field) => {
    const updatedTeams = [...teams];
    if (/^\d*$/.test(input) && input >= 0 && input <= 50) {
      updatedTeams[index][field] = input;
      setTeams(updatedTeams);
    } else {
      if (input > 50) {
        alert('Please enter a score below or equal to 50');
      }
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const submissionUrl = 'https://sheet.best/api/sheets/06e3483b-922e-4443-8fa1-97919e419e4d';

    // Check if all inputs are filled
    const isFilled = teams.every((team) => team.score50 !== '');

    if (!isFilled) {
      alert('Please fill in all scores');
      return;
    }

    // Filter out teams with empty scores before submitting
    const teamsWithScores = teams.filter((team) => team.score50 !== '');

    try {
      const dataToSend = teamsWithScores.map((team) => ({
        name: team.name,
        scoreOutOf50: parseFloat(team.score50),
        scoreOutOf100: convertToOutOf100(parseInt(team.score50)).toFixed(2),
      }));

      const response = await axios.post(submissionUrl, dataToSend);
      if (response.status === 200) {
        setIsSubmitting(false);
        alert('Scores submitted successfully');
      } else {
        setIsSubmitting(false);
        alert('Failed to submit score');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting score:', error);
    }
  };

  const convertToOutOf100 = (score) => (score / 50) * 100;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>      
        <Text style={styles.title}>Communication Round One Score</Text>
        <View style={styles.tableContainer}>
          <View style={styles.columnHeader}>
            <Text style={styles.columnHeaderItem}>Team</Text>
            <Text style={styles.columnHeaderItem}>Score (50)</Text>
            {/* <Text style={styles.columnHeaderItem}>Score (100)</Text> */}
          </View>
          {teams.map((team, index) => (
            <View key={index} style={styles.teamRow}>
              <Text style={styles.teamName}>{team.name}</Text>
              <View style={styles.scoreInputContainer}>
                <TextInput
                  style={styles.scoreInput}
                  keyboardType="numeric"
                  value={team.score50}
                  onChangeText={(text) => handleScoreChange(index, text, 'score50')}
                  maxLength={2}
                  placeholder="Score"
                />
                <Text style={styles.scoreText}>
                  {team.score50 !== ''
                    ? convertToOutOf100(parseInt(team.score50)).toFixed(2)
                    : ''}
                </Text>
              </View>
            </View>
          ))}
          <Button
            title="Submit"
            onPress={handleSubmit}
            color="#3e4095"
            disabled={isSubmitting}
          />
        </View>
      </View>
    </ScrollView>

  );
};

export default TwoScoreOne;
