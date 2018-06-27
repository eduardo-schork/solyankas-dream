import React, { Component } from 'react';
import createNavigator from 'routes';
import { AsyncStorage } from 'react-native';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@avalon:token")
    this.appLoaded(token)
  }

  appLoaded = (token) => {
    this.setState({
      userChecked: true,
      userLogged: !!token,
    })
  }

  render() {
    if (!this.state.userChecked) return null;

    const Routes = createNavigator(this.state.userLogged)

    return <Routes />
  }
}
