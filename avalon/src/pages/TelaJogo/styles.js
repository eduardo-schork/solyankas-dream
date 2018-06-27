import {
  StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
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
  },

  containerPergunta: {
    height: metrics.screenHeight * 0.2,
    backgroundColor: colors.darker,
  },

  containerAlternativa: {
    margin: metrics.baseMargin / 2,
    backgroundColor: colors.darker,
    height: metrics.screenHeight * 0.05,
    width: metrics.screenWidth * 0.45,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row'
  },

  alternativa: {
    backgroundColor: colors.secundary,
    borderRadius: 48,
    padding: 5,
    color: colors.primary,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },

  footer: {
    elevation: 2,
    justifyContent: 'space-evenly',
    height: metrics.screenHeight * 0.17,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 5
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
