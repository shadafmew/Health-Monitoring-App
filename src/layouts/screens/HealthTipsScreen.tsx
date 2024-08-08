import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const { width, height } = Dimensions.get('window')

const healthTips = [
  { id: '1', title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water a day.' },
  { id: '2', title: 'Regular Exercise', content: 'Exercise for at least 30 minutes daily.' },
  { id: '3', title: 'Fitness and Exercise', content: 'Aim for at least 30 minutes of moderate exercise most days of the week. Activities like walking, cycling, or swimming are great options.' },
  { id: '4', title: 'Stretch Regularly', content: 'Incorporate stretching into your routine to improve flexibility and reduce the risk of injury. Yoga and Pilates are excellent for flexibility.' },
  { id: '5', title: 'Eat a Balanced Diet', content: 'Incorporate a variety of fruits, vegetables, whole grains, and lean proteins into your diet. Aim for at least 5 servings of fruits and vegetables daily.' },
  { id: '6', title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water a day. Water is essential for digestion, nutrient absorption, and overall health.' },
  { id: '7', title: 'Limit Processed Foods', content: ' Reduce your intake of processed and fast foods. These often contain high levels of salt, sugar, and unhealthy fats.' },
  { id: '8', title: 'Get Enough Sleep', content: ' Aim for 7-9 hours of sleep each night. Establish a regular sleep routine and create a calming bedtime environment.' },
  { id: '9', title: 'Take Time for Yourself', content: ' Prioritize self-care by setting aside time for hobbies, relaxation, and activities that bring you joy.' },
  { id: '10', title: 'Vaccinations', content: ' Stay up to date with recommended vaccinations, including flu shots and COVID-19 vaccines.' },
];

const HealthTipsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tips</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={healthTips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
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
    backgroundColor:'white'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
  },
  card: {
    marginLeft: 10,
    width: width * 0.9,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#DDEFFD',
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
    justifyContent:'center',
  },
  cardContent:{
    marginBottom:10,
  },
});

export default HealthTipsScreen;
