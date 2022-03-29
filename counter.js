import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import NetworkUtils from './NetworkUtils.js';

class Counter extends Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);
    this.genesisBlock = new NetworkUtils.isNetworkAvailable();
    this.blockchain = new NetworkUtils(this.genesisBlock);
    console.log('rrrrr');
    console.log(NetworkUtils.isNetworkAvailable());
    // this.state = {
    //   net: NetworkUtils,
    // };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {this.state.blockchain} times</Text>
        </View>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
export default Counter;
