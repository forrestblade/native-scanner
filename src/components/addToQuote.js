import React from 'react'
import { Button } from 'react-native-elements'

const AddQuote = () => {
  return (
    <Button
      buttonStyle={{ backgroundColor: '#fdda01' }}
      titleStyle={{ color: 'black' }} 
      title='Add to Quote'
      onPress={() => this.props.navigation.navigate('HomeScreen')}
      />
  )
}

export default AddQuote