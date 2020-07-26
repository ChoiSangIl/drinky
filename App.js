import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import CalendarScreen from './screens/CalendarScreen.js';
import StatisticsScreen from './screens/StatisticsScreen.js';



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="메인" component={HomeScreen} />
        <Tab.Screen name="달력" component={CalendarScreen} />
        <Tab.Screen name="통계" component={StatisticsScreen} />
        <Tab.Screen name="설정" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}