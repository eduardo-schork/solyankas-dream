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

  footer: {
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

});

export default styles;
