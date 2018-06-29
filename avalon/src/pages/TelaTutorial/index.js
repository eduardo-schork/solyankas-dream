import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import steps from './src/steps';
import styles from './styles';
import { colors, metrics } from 'styles';
class TelaJogo extends Component {
  constructor() {
    super();
    this.state = {
      texto: steps[0],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.containerImg}>
            <Image
              style={styles.stalinImg}
              source={require('img/tutorial-stalin.png')} />
            <Image />
          </View>
          <View style={styles.containerChat}>
            <Text style={styles.textChat}>{this.state.texto}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {}}>
          <Text style={styles.textNext}>следующий >></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TelaJogo;
