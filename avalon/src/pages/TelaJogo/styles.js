import {
  StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },

  header: {
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: metrics.screenHeight * 0.1,
    backgroundColor: colors.lighter,
  },

  headerText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: metrics.screenHeight * 0.02,
  },

  containerHeader: {
    padding: 2,
    borderRadius: metrics.baseRadius,
    width: metrics.screenWidth * 0.3,
    height: metrics.screenHeight * 0.06,
    alignItems: 'center',
    backgroundColor: colors.secundary,
    alignSelf: 'center',
  },

  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: metrics.screenHeight * 0.619
  },

  containerPergunta: {
    height: metrics.screenHeight * 0.2,
    backgroundColor: colors.redDarker,
  },

  textPergunta: {
    padding: 3,
    color: colors.white,
    fontSize: metrics.screenHeight * 0.021,
  },

  containerGeralAlternativas: {
    height: metrics.screenHeight * 0.2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderColor: colors.primary
  },

  containerAlternativaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  containerAlternativa: {
    margin: metrics.baseMargin / 2,
    backgroundColor: colors.primary,
    height: metrics.screenHeight * 0.05,
    width: metrics.screenWidth * 0.45,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row'
  },

  respostaAlternativa: {
    fontSize: metrics.screenHeight * 0.02,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 2,
  },

  alternativa: {
    backgroundColor: colors.secundary,
    borderRadius: 48,
    padding: 5,
    color: colors.primary,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },

  containerMsgStalin: {
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.6,
    height: metrics.screenHeight * 0.13,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.secundary,
    alignSelf: 'center'
  },

  textMsgStalin: {
    fontSize: metrics.screenHeight * 0.02,
    color: colors.terciary,
    padding: 2,
  },  

  footer: {
    elevation: 2,
    justifyContent: 'space-evenly',
    height: metrics.screenHeight * 0.18,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: colors.primary
  },

  containerAposta: {
    alignItems: 'center',
    flexDirection: 'column'
  },

  actionButtons: {
    backgroundColor: colors.primary,
    borderRadius: 48,
    height: 25,
    width: 25,
    alignItems: 'center',
    padding: 2
  },

  buttonApostar: {
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.secundary,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },

  apostas: {
    width: 30,
    height: 30,
    borderRadius: 48,
    backgroundColor: colors.secundary,
    padding: 3, alignItems: 'center'
  },

  signals: {
    fontWeight: 'bold',
    fontSize: metrics.screenHeight * 0.04,
    color: colors.secundary
  },

});

export default styles;
