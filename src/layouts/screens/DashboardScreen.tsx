import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTabNavigator from '../../navigations/BottomTabNavigator';

const { height, width } = Dimensions.get('window')
const DashboardScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Ionicons name='menu-outline' size={30} />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity style={styles.icons}>
            <AntDesign name='calendar' size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Ionicons name='notifications-outline' size={26} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>INSIGHT TIMER</Text>
      <Text style={styles.subtitle}>Hi! Sami Ahmed</Text>

      <View style={styles.cardContainer}>
        <View style={styles.kcalCard}>
          <Image source={require('../../images/burnkcal.png')} style={styles.burnImage} />
          <Text style={styles.cardValuekcalCard}>2,000</Text>

          <Text style={styles.cardLabelkcalCard}>Kcal burnt</Text>
        </View>

        <View style={styles.cardContainer2}>
          <View style={styles.glasscard}>
            <Image source={require('../../images/waterGlass.png')} style={styles.waterImage} />
            <View>
              <Text style={styles.cardValue}>10</Text>
              <Text style={styles.cardLabel}>Glass water</Text>
            </View>
          </View>

          <View style={styles.walkcard}>
            <Image source={require('../../images/stepsImage.png')} style={styles.waterImage} />
            <View>
              <Text style={styles.cardValue}>50</Text>
              <Text style={styles.cardLabel}>Step to walk</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardLabelProgressBar}>Your Weekly Progress</Text>
        <Text style={styles.progressLabel}>Your Weekly Report</Text>

        <AnimatedCircularProgress
          size={100}
          width={10}
          fill={65}
          tintColor='white'
          backgroundColor="#888"
          padding={10}
        >
          {
            (fill) => (
              <Text style={styles.progresspercentage}>
                65%
              </Text>
            )
          }
        </AnimatedCircularProgress>
        {/* <process.CircleSnail color={['red', 'green', 'blue']} /> */}
      </View>

      <View style={styles.learnCard}>
        <View style={styles.textBox}>
          <Text style={styles.learnText}>Learn About </Text>
          <Text style={styles.learnText}> Heartbeat.</Text>
          <TouchableOpacity
            style={styles.btn}
          >
            <Image source={require('../../images/playImage.png')} style={styles.playBTn} />
            <Text style={styles.checkNowText}>Check Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../images/HeartBeat.png')} style={styles.bikeIcon} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
  },
  progressCard: {
    backgroundColor: '#4C6FFF',
    width: width * 0.9,
    height: height * 0.22,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,

  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  learnCard: {
    width: width * 0.9,
    height: height * 0.15,
    backgroundColor: '#EDF1FD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  textBox: {
    marginLeft: 16,
  },
  learnText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playBTn: {
    width: width * 0.08,
    height: height * 0.04,
    marginRight: 6,
    marginTop: 4,
  },
  checkNowText: {
    fontSize: 14,
    color: '#007BFF',
  },
  bikeIcon: {
    width: width * 0.18,
    height: height * 0.14,
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7A42F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  kcalCard: {
    width: width * 0.4,
    height: height * 0.4,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFE5D4',
  },
  cardValuekcalCard: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  cardLabelkcalCard: {
    fontSize: 14,
    color: '#888',
    marginTop: 15,
  },
  burnImagecontainer: {
    backgroundColor: 'black',
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  burnImage: {
    width: width * 0.22,
    height: height * 0.12,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 30,
  },
  waterImage: {
    width: width * 0.12,
    height: height * 0.065,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 8,
  },
  cardContainer2: {

  },
  glasscard: {
    width: width * 0.48,
    height: height * 0.15,
    borderTopRightRadius: 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDEFFD',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 10,
  },
  walkcard: {
    width: width * 0.48,
    height: height * 0.2,
    borderBottomRightRadius: 40,
    marginTop: 8,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE1E6',
    flexDirection: 'row',
    textAlign: 'center',
  },
  cardLabelProgressBar: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 20,
  },
  progresspercentage: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  progressLabel: {
    color: 'white',
  },
});

export default DashboardScreen;

