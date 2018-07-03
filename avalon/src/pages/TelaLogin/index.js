import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { colors } from 'styles';

class TelaLogin extends Component {

  constructor() {
    super();
    this.state = {
      nick: null,
      carregando: false,
    }
  }

  onPressButton = async () => {
    if (!this.state.nick) { return }

    this.setState({ carregando: true })
    await AsyncStorage.setItem('@avalon:nick', this.state.nick)
    await AsyncStorage.setItem('@avalon:solyankas', '3')
    this.props.navigation.navigate('TelaTutorial')
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
            {this.state.carregando ? <ActivityIndicator size="small" color={colors.secundary} /> : <Text style={styles.buttonText}>Unir-se</Text>}
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }
}

export default TelaLogin;
