import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Input , Button} from 'react-native-elements'

class ScanOptions extends Component {
    render() {
        return (
            <View style={{height: '100%', display: 'flex', justifyContent: 'flex-end' , alignItems: 'center' }}>
                <View />
                <View style={{width: '90%', display: 'flex', justifyContent: 'space-around' }}>
                    <Input
                        style={{marginBottom:35}}
                        placeholder='Search by Stock #, Serial # or Model'
                            leftIcon={ <Image style={{width:36, height: 24}} source={require('../../assets/search.png')} />}
                    />
                    <Text style={{alignSelf: 'center', marginVertical: 30, fontSize: 18}}>Or</Text>
                    <Button
                    icon={
                        <Image
                        style={{width:24, height: 24, marginRight: 10}}
                        source={require('../../assets/stock.png')}
                        />
                    }
                        buttonStyle={{backgroundColor: '#d6d6d6'}}
                        titleStyle={{color: 'black'}}
                        title='Scan Serial or Stock'
                    />
                    <Text style={{alignSelf: 'center', marginVertical: 30, fontSize: 18}}>Or</Text>
                    <Button
                        icon={
                            <Image
                            style={{width:24, height: 24, marginRight: 10}}
                            source={require('../../assets/scancode.png')}
                            />
                        }
                        buttonStyle={{backgroundColor: '#fdda01', marginBottom: 45}}
                        title='Scan  Barcode'
                        titleStyle={{color: 'black'}}
                        onPress={() => {
                        this.props.navigation.navigate('ScanBarcode')}}
                    />
                </View>
            </View>
        )
    }
}



export default ScanOptions