import React, { Component } from 'react';
import {
  ImageBackground,
} from 'react-native';

import styles from './styles';

class TelaDesistir extends Component {
  render() {
    return (
      <ImageBackground
        source={require('img/desistir-background.png')}
        style={{ width: '100%', height: '100%' }}>
      </ImageBackground>
    );
  }
}

export default TelaDesistir;
