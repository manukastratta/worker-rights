import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RightsScreen from '../screens/RightsScreen';
import SubRightsScreen from '../screens/SubRightsScreen';
import RightsDetailsScreen from '../screens/RightsDetailsScreen';

const RightsNavigator = createStackNavigator({
  Rights: {
    screen: RightsScreen,
  },
  SubRights: SubRightsScreen,
  RightsDetails: RightsDetailsScreen
});

export default createAppContainer(RightsNavigator);