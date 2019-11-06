import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ScanOptions from './components/ScanOptions';

class HomeScreen extends Component {

  render() {

    return (
      <View style={styles.container}>
        <ScanOptions navigation={this.props.navigation} />
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

export default HomeScreen

