import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';

import styles from './styles';
import { colors, metrics } from 'styles';
class TelaJogo extends Component {
    constructor() {
        super();
        this.state = {
            nick: null,
            solyankas: 3,
            apostados: 0,
        }
    }

    async componentDidMount() {
        this.setState({ nick: await AsyncStorage.getItem('@avalon:nick') })
    }

    desistir = async () => {
        await AsyncStorage.removeItem('@avalon:nick')
        this.props.navigation.navigate("Login")
    }

    addAposta = () => {
        if (!((this.state.apostados + 1) > this.state.solyankas)) {
            this.setState(prevState => ({ apostados: prevState.apostados + 1 }))
        }
    }

    removeAposta = () => {
        if (!(this.state.apostados - 1 < 0)) {
            this.setState(prevState => ({ apostados: prevState.apostados - 1 }))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('img/header-background.png')}
                    style={styles.header}>

                    <View style={styles.containerHeader}>
                        <Text style={styles.headerText}>Camarada</Text>
                        <Text style={styles.headerText}>{this.state.nick}</Text>
                    </View>

                    <View style={styles.containerHeader}>
                        <Text style={styles.headerText}>Solyanka's</Text>
                        <Text style={styles.headerText}>{this.state.solyankas}</Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.containerHeader, { justifyContent: 'center' }]}
                        onPress={this.desistir}>
                        <Text style={styles.headerText}>Desistir</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground
                    source={require('img/footer-background.png')}
                    blurRadius={1}
                    style={styles.footer}>

                    <View style={styles.containerAposta}>
                        <View style={{ width: 30, height: 30, borderRadius: 48, backgroundColor: colors.secundary, padding: 3, alignItems: 'center' }}>
                            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{this.state.apostados}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={this.removeAposta}
                                style={styles.actionButtons}>
                                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>-</Text>
                            </TouchableOpacity>
                            <Image
                                style={{ margin: 2, tintColor: colors.primary }}
                                source={require('img/footer-food.png')}
                            />
                            <TouchableOpacity
                                onPress={this.addAposta}
                                style={styles.actionButtons}>
                                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonApostar}
                            onPress={() => { }}>
                            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Apostar</Text>
                        </TouchableOpacity>
                    </View>

                    <ImageBackground
                        style={{ width: metrics.screenWidth * 0.3, height: metrics.screenHeight * 0.25 }}
                        source={require('img/footer-roullete.png')}
                    >
                    </ImageBackground>

                </ImageBackground>
            </View >
        );
    }
}

export default TelaJogo;
