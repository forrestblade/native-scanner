import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ButtonGroup } from "react-native-elements";
import ScanOptions from './ScanOptions';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = ['Equipment', 'Customers', 'Quote']
    const { selectedIndex } = this.state

    return (
      <View style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: 'green'
          }}
          leftComponent={{}}
          centerComponent={{ text: 'Equipment', style: { color: '#fff' } }}
          rightComponent={{ icon: 'menu', color: '#fff' }}
        />
        <ScanOptions />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: '#fafafa'}}
          selectedTextStyle={{color: 'green'}}
          containerStyle={{ height: 80, backgroundColor: '#fafafa' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between'
  }
});
