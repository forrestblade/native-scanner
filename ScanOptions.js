import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Input, Icon } from 'react-native-elements'

class ScanOptions extends Component {
    render() {
        return (
            <View style={{ display: 'flex', justifyContent: 'flex-end' , alignItems: 'center' }}>
                <View />
                <View style={{ height: '50%', width: '90%', display: 'flex', justifyContent: 'space-around' }}>
                    <Input
                        placeholder='Search by Stock#, Serial# or Model'
                        leftIcon={{ type: 'font-awesome', name: 'search' }}
                    />
                    <Text style={{alignSelf: 'center'}}>Or</Text>
                    <Button
                        color='#d6d6d6'
                        title="Scan Serial or Stock"
                    />
                    <Text style={{alignSelf: 'center'}}>Or</Text>
                    <Button
                        color="#fdda01"
                        title="Scan Barcode"
                    />
                </View>
            </View>
        )
    }
}

export default ScanOptions