import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import styles from './styles';

class TelaLogin extends Component {

  constructor() {
    super();
    this.state = {
      nick: null,
    }
  }

  onPressButton = async () => {
    await AsyncStorage.setItem('@avalon:nick', this.state.nick)
    this.props.navigation.navigate('TelaJogo')
  }

  render() {
    return (
      <ImageBackground
        source={require('img/login-background.png')}
        style={{ width: '100%', height: '100%' }}
        blurRadius={3}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Solyankas Dream
          </Text>

          <TextInput
            style={styles.input}
            placeholder="nickname"
            underlineColorAndroid='rgba(0, 0, 0, 0)'
            onChangeText={(nick) => this.setState({ nick })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressButton}>
            <Text style={styles.buttonText}>Unir-se</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }
}

export default TelaLogin;
