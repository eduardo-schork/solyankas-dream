import {
  StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.04,
    fontWeight: 'bold',
    color: colors.terciary
  },

  input: {
    alignSelf: 'center',
    width: metrics.screenWidth * 0.6,
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    margin: 10,
  },

  button: {
    alignSelf: 'center',
    width: metrics.screenWidth * 0.6,
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
  },

  buttonText: {
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.02,
    fontWeight: 'bold',
    color: colors.secundary
  },
});

export default styles;
