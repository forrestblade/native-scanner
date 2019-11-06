import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import HomeScreen from '..'
import Find from './find';
import AddQuote from './addToQuote';

class EquipmentDetails extends Component {
  keys = [
    'List Price', 'In Inventory', 'Stock #', 'Serial #', 'Vehicle #', 'Meter R.'
  ]

  values = Array.from(Object.entries(this.props.machine.details))

  render() {
    return (
      <View>
        <Text style={{ marginTop: 30, marginLeft: 15, fontWeight: 'bold', fontSize: 24 }}>{this.props.machine.tractorName}</Text>
        <View style={{ margin: 20, display: "flex", flexDirection: 'row' }}>
          <View style={{ marginBottom: 30 }}>
            {this.keys.map(key => <Text key={Math.random()} style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 5 }}>{key}</Text>)}
          </View>
          <View style={{ marginBottom: 30, marginLeft: 15 }}>
            {this.values.map(value => <Text key={Math.random()} style={{ fontSize: 14, marginVertical: 5 }}>{value[1]}</Text>)}
          </View>
        </View>
        <Text style={{textAlign: "right", paddingRight: 20}}>List Price</Text>
        <View style = {styles.lineStyle} />
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", margin: 15}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>BASE MACHINE</Text>
            <Text style={{fontSize: 18}}>{this.props.machine.baseMachine}</Text>
          </View>
          <View>
            <Text style={{fontSize: 18}}>{this.props.machine.details.listPrice}</Text>
          </View>
        </View>
        <View style = {styles.lineStyle} />
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", margin: 15}}>
          <View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>UNITED STATES</Text>
          <Text style={{fontSize: 18}}>001C</Text>
          </View>
          <View>
          <Text style={{fontSize: 18}}>0.00</Text>
          </View>
        </View>
        <View style = {styles.lineStyle} />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  'Find Similar': Find,
  'Add to Quote': AddQuote,
},
{
  tabBarOptions: {
    inactiveTintColor: 'gray',
    inactiveBackgroundColor: '#fafafa',
    activeBackgroundColor: '#fafaf2a'
  }
});

EquipmentDetails.defaultProps = {
  machine: {
    tractorName: 'John Deere D110 Lawn Tractor',
    details: {
      listPrice: 2472,
      DaysInInventory: 32,
      stockNumber: 125549,
      serialNumber: '1GXD110EKFF625130',
      vehicleNumber: 1000003789,
      meterR: 29
    },
    baseMachine: '081BGX'
  }
}

const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'gray',
        marginVertical: 15
   }
 });

export default EquipmentDetails