import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
  Vibration,
} from 'react-native';

import styles from './styles';
import { colors, metrics } from 'styles';

const vetorChances = [1, 2, 1, 0, 1, 1];

import perguntas from './src/perguntas';
import falas from './src/falas_stalin';
class TelaJogo extends Component {
  constructor() {
    super();
    this.state = {
      nick: null,
      solyankas: null,
      apostados: 1,
      multiplicador: '',
      buttonApostas: false,
      buttonIr: true,
      buttonRoullete: true,
      buttonAlternativas: true,
      pergunta: '',
      alternativaA: '',
      alternativaB: '',
      alternativaC: '',
      alternativaD: '',
      resposta: '',
      vetorExcluidos: [],
      stalinMsg: falas[0],
    }
  }

  async componentDidMount() {
    this.setState({
      nick: await AsyncStorage.getItem('@avalon:nick'),
      solyankas: Number(await AsyncStorage.getItem('@avalon:solyankas'))
    })
  }

  desistir = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate("TelaDesistir")
  }

  addAposta = () => {
    if (!((this.state.apostados + 1) > this.state.solyankas)) {
      this.setState(prevState => ({ apostados: prevState.apostados + 1 }))
    }
  }

  removeAposta = () => {
    if (!(this.state.apostados - 1 < 1)) {
      this.setState(prevState => ({ apostados: prevState.apostados - 1 }))
    }
  }

  apostar = () => {
    this.setState({
      buttonApostas: true,
      buttonRoullete: false,
    })
  }

  roletar = async () => {
    this.setState({
      buttonRoullete: true,
      buttonIr: false,
    })
    const random = Math.floor(Math.random() * 6)
    const multiplicador = vetorChances[random]
    this.setState({ multiplicador: multiplicador }, async () => {
      if (multiplicador == 0) {
        Alert.alert(
          'Zerou a roleta',
          "Você bobeou e os nazistas pegaram seus Solyanka's apostados. Otário.",
          [
            {
              text: 'Sou trouxa', onPress: () => { }
            },
          ],
          { cancelable: false }
        )
        if ((this.state.solyankas - this.state.apostados) == 0) {
          this.perdeu()
        } else {
          await this.setState(prevState => ({
            solyankas: prevState.solyankas - this.state.apostados,
            buttonApostas: false,
            buttonIr: true,
            buttonRoullete: true,
            apostados: 1,
            multiplicador: '',
          }), async () => await AsyncStorage.setItem('@avalon:solyankas', (this.state.solyankas.toString())))
        }
      }
    })
  }


  ir = async () => {
    this.setState({
      buttonIr: true,
      buttonAlternativas: false,
    })
    const random = Math.floor(Math.random() * 20)
    for (const x = 0; x < this.state.vetorExcluidos.length; x++) {
      if (random == this.state.vetorExcluidos[x]) {
        this.ir()
      } else {
        this.setState(prevState => ({
          vetorExcluidos: [...prevState.vetorExcluidos, random]
        }))
      }
    }
    this.setState({
      pergunta: perguntas[random].pergunta,
      alternativaA: perguntas[random].alternativaA,
      alternativaB: perguntas[random].alternativaB,
      alternativaC: perguntas[random].alternativaC,
      alternativaD: perguntas[random].alternativaD,
      resposta: perguntas[random].resposta,
    })
  }

  verificarResposta = async (alternativa) => {
    this.setState({
      buttonAlternativas: true,
    })
    if (this.state.resposta == alternativa) {
      const pontos = this.state.apostados * this.state.multiplicador
      await this.setState(prevState => ({
        solyankas: prevState.solyankas + pontos,
        apostados: 1,
        multiplicador: '',
        buttonApostas: false,
        pergunta: '',
        alternativaA: '',
        alternativaB: '',
        alternativaC: '',
        alternativaD: '',
        resposta: '',
        stalinMsg: falas[2],
      }), async () => {
        Vibration.vibrate(1500)
        await AsyncStorage.setItem('@avalon:solyankas', (this.state.solyankas.toString()))
      })
    } else {
      await this.setState(prevState => ({
        solyankas: prevState.solyankas - prevState.apostados,
        apostados: 1,
        multiplicador: '',
        buttonApostas: false,
        pergunta: '',
        alternativaA: '',
        alternativaB: '',
        alternativaC: '',
        alternativaD: '',
        resposta: '',
        stalinMsg: falas[1],
      }), async () => {
        Vibration.vibrate([1000, 200, 1000, 200, 2000])
        if (this.state.solyankas == 0) {
          this.perdeu()
        } else {
          await AsyncStorage.setItem('@avalon:solyankas', (this.state.solyankas.toString()))
        }
      })
    }
  }

  perdeu = async () => {
    Alert.alert(
      "0 solyankas + fome = morte",
      "Porra soldado, você jogou mal e perdeu todos os seus Solyankas, agora vai morrer de fome, não foi dessa vez.\nMas lembre-se: salvador Stalin guardou um lugar no céu para você.",
      [
        {
          text: 'Perdeu otário', onPress: () => {
            AsyncStorage.removeItem('@avalon:nick')
            BackHandler.exitApp()
          }
        },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/*header*/}
        <ImageBackground
          source={require('img/header-background.png')}
          style={styles.header}>

          <ImageBackground
            source={require('img/header-russian.png')}
            style={styles.containerHeader}>
            <Text style={styles.headerText}>Camarada</Text>
            <Text style={styles.headerText}>{this.state.nick}</Text>
          </ImageBackground>

          <ImageBackground
            source={require('img/header-solyanka.png')}
            style={styles.containerHeader}>
            <Text style={styles.headerText}>Solyankas</Text>
            <Text style={styles.headerText}>{this.state.solyankas}</Text>
          </ImageBackground>

          <TouchableOpacity
            style={styles.containerHeader}
            onPress={() => this.desistir()}>
            <ImageBackground
              style={{ width: '100%', height: '100%', justifyContent: 'center', borderRadius: 3 }}
              source={require('img/header-lgbt.png')}>
              <Text style={styles.headerText}>Desistir</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
        {/*header*/}

        {/*body*/}
        <View style={styles.body}>
          {/*pergunta / respostas*/}
          <View style={{ alignItems: 'stretch' }}>
            <View style={styles.containerPergunta}>
              <Text style={styles.textPergunta}>{this.state.pergunta}</Text>
            </View>

            <View style={styles.containerGeralAlternativas}>
              <View style={styles.containerAlternativaLinha}>
                <TouchableOpacity
                  onPress={() => this.verificarResposta('a')}
                  disabled={this.state.buttonAlternativas}
                  style={styles.containerAlternativa}>
                  <Text style={styles.alternativa}>Щ</Text>
                  <Text style={styles.respostaAlternativa}>{this.state.alternativaA}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.verificarResposta('b')}
                  disabled={this.state.buttonAlternativas}
                  style={styles.containerAlternativa}>
                  <Text style={styles.alternativa}>Б</Text>
                  <Text style={styles.respostaAlternativa}>{this.state.alternativaB}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerAlternativaLinha}>
                <TouchableOpacity
                  onPress={() => this.verificarResposta('c')}
                  disabled={this.state.buttonAlternativas}
                  style={styles.containerAlternativa}>
                  <Text style={styles.alternativa}>Ж</Text>
                  <Text style={styles.respostaAlternativa}>{this.state.alternativaC}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.verificarResposta('d')}
                  disabled={this.state.buttonAlternativas}
                  style={styles.containerAlternativa}>
                  <Text style={styles.alternativa}>Д</Text>
                  <Text style={styles.respostaAlternativa}>{this.state.alternativaD}</Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>
          {/*pergunta / respostas*/}

          {/*stalinsite*/}
          <ImageBackground
            style={styles.stalinSite}
            source={require('img/body-greenfield.png')}>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
              <View style={styles.containerMsgStalin}>
                <Text style={styles.textMsgStalin}>{this.state.stalinMsg}</Text>
              </View>
              <Image
                style={{ width: 100, height: 100 }}
                source={require('img/body-stalinhead.png')} />
            </View>
          </ImageBackground>
          {/*stalinsite*/}

        </View>
        {/*body*/}

        {/*foooter*/}
        <ImageBackground
          source={require('img/footer-background.png')}
          blurRadius={1}
          style={styles.footer}>
          {/*apostas*/}
          <View style={styles.containerAposta}>
            <View style={styles.apostas}>
              <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{this.state.apostados}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                disabled={this.state.buttonApostas}
                onPress={this.removeAposta}
                style={styles.actionButtons}>
                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>-</Text>
              </TouchableOpacity>
              <Image
                style={{ margin: 2, tintColor: colors.primary }}
                source={require('img/footer-food.png')}
              />
              <TouchableOpacity
                disabled={this.state.buttonApostas}
                onPress={this.addAposta}
                style={styles.actionButtons}>
                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              disabled={this.state.buttonApostas}
              style={styles.buttonApostar}
              onPress={() => this.apostar()}>
              <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Apostar</Text>
            </TouchableOpacity>
          </View>
          {/*apostas*/}

          <Text style={styles.signals}>X</Text>

          {/*roullete*/}
          <View>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: metrics.screenHeight * 0.02, color: colors.black }}>ROLETA RUSSA</Text>
            <TouchableOpacity
              disabled={this.state.buttonRoullete}
              onPress={() => this.roletar()}>
              <ImageBackground
                style={{ width: metrics.screenWidth * 0.2, height: metrics.screenHeight * 0.12, justifyContent: 'center', alignSelf: 'center' }}
                source={require('img/footer-roullete.png')}
              >
                <Text style={{ alignSelf: 'center', color: colors.secundary, fontWeight: 'bold', fontSize: metrics.screenHeight * 0.02 }}>{this.state.multiplicador}x</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          {/*roullete*/}

          <Text style={styles.signals}>=</Text>

          {/*ir*/}
          <TouchableOpacity
            disabled={this.state.buttonIr}
            onPress={() => this.ir()}>
            <ImageBackground
              style={{ width: metrics.screenWidth * 0.21, height: metrics.screenHeight * 0.12 }}
              source={require('img/footer-urss.png')}>
              <Text style={{ padding: 2, paddingHorizontal: 10, backgroundColor: 'black', color: colors.white, alignSelf: 'center' }}>IR!</Text>
            </ImageBackground>
          </TouchableOpacity>
          {/*ir*/}
        </ImageBackground>
        {/*foooter*/}
      </View >
    );
  }
}

export default TelaJogo;
