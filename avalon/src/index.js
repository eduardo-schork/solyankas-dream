import React, { Component } from 'react';
import createNavigator from 'routes';
import { AsyncStorage } from 'react-native';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const nick = await AsyncStorage.getItem("@avalon:nick")
    this.appLoaded(nick)
  }

  appLoaded = (nick) => {
    this.setState({
      userChecked: true,
      userLogged: !!nick,
    })
  }

  render() {
    if (!this.state.userChecked) return null;

    const Routes = createNavigator(this.state.userLogged)

    return <Routes />
  }
}
