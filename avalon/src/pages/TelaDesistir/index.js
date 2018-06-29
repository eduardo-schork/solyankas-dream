import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  BackHandler
} from 'react-native';

import styles from './styles';
import { colors, metrics } from 'styles';
class TelaDesistir extends Component {
  handler = () => {
    setTimeout(() => {
      BackHandler.exitApp()
    }, 3000);
  }

  render() {
    this.handler()
    return (
      <ImageBackground
        source={require('img/desistir-background.png')}
        resizeMode={'contain'}
        style={{ width: '100%', height: '100%', justifyContent: 'flex-end', backgroundColor: colors.redDarker }}>
        <View style={{ width: metrics.screenWidth * 0.7, alignSelf: 'center', marginBottom: '9%' }}>
          <Text style={styles.texto}>CAÇAROLA SOLDADO VOCÊ DESISTIU não foi para isso que eu lhe investi 3 solyankas, você é um marica mesmo.</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default TelaDesistir;
