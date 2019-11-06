import React, { Component } from 'react'
import { Image, View, Button } from 'react-native'

class ScanBarcode extends Component {
  render () {
    return (
      <View>
        <Image source={require('../../assets/barcode.jpg')}/>
        <Button onPress={() => this.props.navigation.navigate('EquipmentDetails')}
        title="Scan" />
      </View>
    )
  }
}

export default ScanBarcode