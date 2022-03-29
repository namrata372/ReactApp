import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  s,
} from 'react-native';
export default class PostApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: []};
  }

  componentDidMount = () => {
    var data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
        this.setState({
          user: responseJson,
        });
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  render() {
    return <View />;
  }
}
