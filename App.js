import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import CalendarScreen from './screens/CalendarScreen.js';
import StatisticsScreen from './screens/StatisticsScreen.js';
import SettingsScreen from './screens/SettingScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '메인') {
              iconName = focused ? 'beer' : 'beer-outline';
            } else if (route.name === '달력') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === '통계'){
              iconName = focused ? 'podium' : 'podium-outline';
            } else if (route.name === '설정'){
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size}  color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="메인" component={HomeScreen} />
        <Tab.Screen name="달력" component={CalendarScreen} />
        <Tab.Screen name="통계" component={StatisticsScreen} />
        <Tab.Screen name="설정" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}