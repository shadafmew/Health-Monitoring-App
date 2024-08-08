import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const {width,height} = Dimensions.get('window')
const activities = [
  { id: '1', date: '2024-08-01', steps: 5000, calories: 300 },
  { id: '2', date: '2024-08-02', steps: 4500, calories: 280 },
  { id: '3', date: '2024-08-03', steps: 6500, calories: 580 },
  { id: '4', date: '2024-08-04', steps: 7500, calories: 480 },
  { id: '5', date: '2024-08-05', steps: 7900, calories: 180 },
  { id: '6', date: '2024-08-06', steps: 2580, calories: 680 },
  { id: '7', date: '2024-08-07', steps: 9500, calories: 780 },
  { id: '8', date: '2024-08-08', steps: 1500, calories: 880 },
];

const ActivityLogScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Log</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>{item.date}</Text>
            <Text>Steps: {item.steps}</Text>
            <Text>Calories: {item.calories}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  card: {
    marginBottom: 10,
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  cardLabel: {
    fontSize: 16,
    color: '#888',
  },
});

export default ActivityLogScreen;
