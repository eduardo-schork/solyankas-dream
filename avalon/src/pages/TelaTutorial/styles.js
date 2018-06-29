import {
  StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.redDarker,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

  containerImg: {
    justifyContent: 'space-evenly',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: metrics.screenHeight * 0.7,
  },

  stalinImg: {
    height: metrics.screenHeight * 0.7,
    width: metrics.screenWidth * 0.7
  },

  containerChat: {
    width: '100%',
    height: metrics.screenHeight * 0.15,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secundary
  },

  textChat: {
    padding: 4,
    color: colors.black,
    fontSize: metrics.screenHeight * 0.02,
    fontWeight: 'bold'
  },

  buttonNext: {
    alignSelf: 'flex-end',
    margin: 4,
    backgroundColor: colors.secundary,
    width: metrics.screenWidth * 0.35
  },

  textNext: {
    alignSelf: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: metrics.screenHeight * 0.025,
  },
});

export default styles;
