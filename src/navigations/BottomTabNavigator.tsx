import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivityLogScreen from "../layouts/screens/ActivityLogScreen";
import HealthTipsScreen from "../layouts/screens/HealthTipsScreen";
import DashboardScreen from "../layouts/screens/DashboardScreen";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { height, width } = Dimensions.get('window')

const Tab = createBottomTabNavigator()

import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
            tabBarStyle: {
                borderRadius: 20,
                backgroundColor: '#FFE1E6',
                height: height * 0.08,
            },
        })}
        >
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
            <Tab.Screen name="ActivityLogScreen" component={ActivityLogScreen} />
            <Tab.Screen name="HealthTipsScreen" component={HealthTipsScreen} />
        </Tab.Navigator>
    );
}

const menuIcons = ( route, focused: any) => {
    let icon;

    if (route.name === 'ActivityLogScreen') {
        icon = focused ? (
            <Feather name='activity' color={'#007BFF'} size={30} />
        ) : (
            <Feather name='activity' color={''} size={30} />
        );

    } else if (route.name === 'HealthTipsScreen') {
        icon = focused ? (
            <Entypo name="heart" color={'#007BFF'} size={30} />
        ) : (
            <Entypo name="heart-outlined" color={''} size={35} />
        );
    } else if (route.name === 'DashboardScreen') {
        icon = focused ? (
            <MaterialIcons name="health-and-safety" color={'#007BFF'} size={30} />
        ) : (
            <MaterialIcons name="health-and-safety" color={''} size={35} />
        );
    }

    const buttonClass = focused ? { backgroundColor: 'white' } : { backgroundColor: '#FFE1E6' };


    return (
        <View style={[styles.icons, buttonClass]}>
            {icon}
        </View>
    );
};

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 80,
        padding: 6,
        backgroundColor: 'white',
    },
    iconText: {
        backgroundColor: 'white',
    },
});
export default BottomTabNavigator;
