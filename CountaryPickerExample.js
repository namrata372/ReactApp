import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

export default class CountryPickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cca2: 'US',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Country Picker !</Text>
        <CountryPicker
          onSelect={value => this.setState({country: value, cca2: value.cca2})}
          cca2={this.state.cca2}
          translation="eng"
        />
        <Text style={styles.instructions}>press on the flag</Text>
        {this.state.country && (
          <Text style={styles.data}>
            {JSON.stringify(this.state.country, null, 2)}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
});
