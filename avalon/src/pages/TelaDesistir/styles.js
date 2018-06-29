import {
  StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  texto: {
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.primary,
    color: colors.black,
    alignSelf: 'center',
    padding: 5,
    fontWeight: 'bold',
  }
});

export default styles;
