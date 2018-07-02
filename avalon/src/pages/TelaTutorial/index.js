import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import texto from './src/steps';
import styles from './styles';
import { colors, metrics } from 'styles';
class TelaJogo extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    }
  }

  removeStep = () => {
    if ((this.state.step - 1 < 1)) {
      if (this.state.step == 1) {
        this.setState(prevState => ({
          step: prevState.step - 1,
          botaoBack: false
        }))
      } else {
        this.setState({ botaoBack: false })
      }
    } else {
      this.setState(prevState => ({ step: prevState.step - 1 }))
    }
  }

  addStep = () => {
    if (this.state.step + 1 > 6) {
      this.props.navigation.navigate('TelaJogo')
    } else {
      this.setState(prevState => ({
        step: prevState.step + 1,
        botaoBack: true
      }))
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
            <Text style={styles.textChat}>{texto[this.state.step]}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {this.state.botaoBack ? <TouchableOpacity
            style={[styles.buttonNext, { alignSelf: 'flex-start', }]}
            onPress={() => this.removeStep()}>
            <Text style={styles.textNext}>{'<< назад'}</Text>
          </TouchableOpacity> : null}

          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => this.addStep()}>
            <Text style={styles.textNext}>следующий >></Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

export default TelaJogo;
