import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../modules/home/home-page';
import colors from '../common/colors';
import {Image} from 'react-native';
import icons from '../common/icons';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({color, icon}) => {
  return (
    <Image source={icon} style={{height: 32, width: 32, tintColor: color}} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.white, // Color of the active tab
        tabBarInactiveTintColor: 'gray', // Color of inactive tabs
        tabBarActiveBackgroundColor: colors.black,
        tabBarInactiveBackgroundColor: colors.black,
        size: 15,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <TabBarIcon icon={icons.home} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <TabBarIcon icon={icons.timer} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <TabBarIcon icon={icons.timer} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <TabBarIcon icon={icons.timer} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <TabBarIcon icon={icons.timer} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
