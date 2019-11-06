import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/'
import Quote from './src/components/Quote';
import Customers from './src/components/Customers';
import { createStackNavigator } from 'react-navigation-stack';
import ScanBarcode from './src/components/ScanBarcode'
import { Image } from 'react-native';
import EquipmentDetails from './src/components/EquipmentDetails';

const TabNavigator = createBottomTabNavigator({
  Equipment: HomeScreen,
  Customers: Customers,
  Quote: Quote,
},
{
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
    inactiveBackgroundColor: '#fafafa',
    activeBackgroundColor: '#fafaf2a'
  }
});

navigationOptions = ({navigation, screenProps}) => ({
  headerMode: 'screen',
  title: 'Equipment',
  headerRight: () => {<Image source={require('./assets/menu.svg')}/>},
  headerStyle: {
    backgroundColor: 'green',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

const RootNavigate = createStackNavigator({
  TabNavigator: TabNavigator,
  ScanBarcode: ScanBarcode,
  EquipmentDetails: EquipmentDetails
},{
  initialRouteName: 'TabNavigator',
  defaultNavigationOptions: navigationOptions
})

export default createAppContainer(RootNavigate);