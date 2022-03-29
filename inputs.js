import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Toast from 'react-native-simple-toast';

class Inputs extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };

  login = (email, pass) => {
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    if (email.length < 1) {
      Toast.show('Email is required', Toast.LONG);

      // alert('Email is required');
    } else if (!strongRegex.test(email)) {
      Toast.show('Invalid Email', Toast.LONG);

      // alert('Invalid Email');
      return false;
    } else if (pass.length < 8) {
      Toast.show('Password length greater than 8', Toast.LONG);

      //alert('Password length greater than 8');
      return false;
    } else {
      alert('email: ' + email + ' password: ' + pass);
    }

    console.log('email: ' + email + ' password: ' + pass);
    //  Alert.alert('Title', 'email: ' + email + ' password: ' + pass, [
    //    {text: 'ok', onPress: () => console.log('ok')},
    //    {text: 'cancel'},
    //  ]);
    //alert('email: ' + email + ' password: ' + pass)
  };

  render() {
    return (
      <View style={styles.containerbg}>
        <ImageBackground
          source={require('./assets/bg1.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={this.handleEmail}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#000"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={this.handlePassword}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.login(this.state.email, this.state.password)}>
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Forgot Password ?</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#ffccb6',
    //zIndex: 999,
    //  alignItems: 'center',

    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  containerbg: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#77ffccb6',

    //  alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    //blurRadius: 50,

    // opacity: 0.6,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center' /* horizontally center */,
    alignItems: 'center' /* vertically center */,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#000000',
    padding: 10,
    margin: 15,
    height: 40,
    //flex:1,
    flexDirection: 'row',
    //justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'flex-end',
    margin: 15,
  },
});
