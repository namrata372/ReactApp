import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
export default class GetDelApi extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'GetDelApi',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {textAlign: 'center', flex: 1},
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      connection_Status: '',
    };
  }

  // componentDidMount = () => {
  //   var data = {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   };
  //   var dataToSend = {title: 'foo', body: 'bar', userId: 1};
  //   var formBody = [];
  //   for (var key in dataToSend) {
  //     var encodedKey = encodeURIComponent(key);
  //     var encodedValue = encodeURIComponent(dataToSend[key]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   formBody = formBody.join('&');
  //   //POST request
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST', //Request Type
  //     body: JSON.stringify(data), //formBody, //post body
  //     headers: {
  //       //Header Defination
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         loading: false,
  //         dataSource: responseJson,
  //       });
  //       //alert(JSON.stringify(responseJson));
  //       //console.log(responseJson);
  //     })
  //     .catch(error => {
  //       alert(JSON.stringify(error));
  //       console.error(error);
  //     });};
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error));
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };
  renderItem = data => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.id}</Text>
      <Text style={styles.lightText}>{data.item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handlePress(data.item.id)}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  handlePress(id) {
    console.log(id);
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    }).then(() => this.setState({status: 'Delete successful'}));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson.filter(product => product.id !== id),
        });
      })
      .catch(error => console.log(error));
    console.log('deleted');
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Device Current Status : </Text>
        <Text style={styles.text}>
          {' '}
          You are {this.state.connection_Status}{' '}
        </Text>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
});
