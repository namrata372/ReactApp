import React from 'react';
import {View, Text} from 'react-native';

class PutApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: []};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'err',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          user: json,
        });
      });
  }
  render() {
    return (
      <View>
        <Text>Id : {this.state.user.id}</Text>
        <Text>Title : {this.state.user.title}</Text>
        <Text>Body : {this.state.user.body}</Text>
        <Text>UserId : {this.state.user.userId}</Text>
      </View>
    );
  }
}
export default PutApi;
