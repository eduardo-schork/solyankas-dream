import { createStackNavigator } from 'react-navigation';

import TelaLogin from 'pages/TelaLogin';
import TelaJogo from 'pages/TelaJogo';

const createNavigator = (isLogged = false) => createStackNavigator({
  Login: {
    screen: TelaLogin,
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
}, { initialRouteName: isLogged ? 'TelaJogo' : 'Login' });

export default createNavigator;
