import { createStackNavigator } from 'react-navigation';

import TelaLogin from 'pages/TelaLogin';
import TelaJogo from 'pages/TelaJogo';
import TelaDesistir from 'pages/TelaDesistir';
import TelaTutorial from 'pages/TelaTutorial';

const createNavigator = (isLogged = false) => createStackNavigator({
  Login: {
    screen: TelaLogin,
    navigationOptions: {
      header: null
    }
  },

  TelaTutorial: {
    screen: TelaTutorial,
    navigationOptions: {
      header: null
    }
  },

  TelaJogo: {
    screen: TelaJogo,
    navigationOptions: {
      header: null
    }
  },

  TelaDesistir: {
    screen: TelaDesistir,
    navigationOptions: {
      header: null
    }
  },
}, { initialRouteName: isLogged ? 'TelaJogo' : 'Login' });

export default createNavigator;
