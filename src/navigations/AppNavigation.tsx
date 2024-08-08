import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../layouts/screens/DashboardScreen'
import ActivityLogScreen from '../layouts/screens/ActivityLogScreen'
import HealthTipsScreen from '../layouts/screens/HealthTipsScreen'
import BottomTabNavigator from '../navigations/BottomTabNavigator'
const AppNavigation = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Parent'>
            {/* <Stack.Screen name='DashboardScreen' component={DashboardScreen} />
            <Stack.Screen name='ActivityLogScreen' component={ActivityLogScreen} />
            <Stack.Screen name='HealthTipsScreen' component={HealthTipsScreen} /> */}
            <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})