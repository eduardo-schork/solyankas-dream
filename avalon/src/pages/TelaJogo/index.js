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
            buttonApostas: false,
            buttonIr: true,
            buttonRoullete: true,
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

    apostar = () => {
        this.setState({
            buttonApostas: true,
            buttonRoullete: false,
        })
    }

    roletar = () => {
        this.setState({
            buttonRoullete: true,
            buttonIr: false,
        })
    }

    ir = () => {
        this.setState({
            buttonIr: true,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/*header*/}
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
                {/*header*/}

                {/*body*/}

                {/*body*/}

                {/*foooter*/}
                <ImageBackground
                    source={require('img/footer-background.png')}
                    blurRadius={1}
                    style={styles.footer}>
                    {/*apostas*/}
                    <View style={styles.containerAposta}>
                        <View style={styles.apostas}>
                            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{this.state.apostados}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                disabled={this.state.buttonApostas}
                                onPress={this.removeAposta}
                                style={styles.actionButtons}>
                                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>-</Text>
                            </TouchableOpacity>
                            <Image
                                style={{ margin: 2, tintColor: colors.primary }}
                                source={require('img/footer-food.png')}
                            />
                            <TouchableOpacity
                                disabled={this.state.buttonApostas}
                                onPress={this.addAposta}
                                style={styles.actionButtons}>
                                <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            disabled={this.state.buttonApostas}
                            style={styles.buttonApostar}
                            onPress={() => this.apostar()}>
                            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Apostar</Text>
                        </TouchableOpacity>
                    </View>
                    {/*apostas*/}

                    <Text style={{ fontWeight: 'bold', fontSize: metrics.screenHeight * 0.04, color: colors.secundary }}>X</Text>

                    {/*roullete*/}
                    <TouchableOpacity
                        disabled={this.state.buttonRoullete}
                        onPress={() => this.roletar()}>
                        <ImageBackground
                            style={{ width: metrics.screenWidth * 0.3, height: metrics.screenHeight * 0.25 }}
                            source={require('img/footer-roullete.png')}
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                    {/*roullete*/}

                    <Text style={{ fontWeight: 'bold', fontSize: metrics.screenHeight * 0.04, color: colors.secundary }}>=</Text>

                    {/*ir*/}
                    <TouchableOpacity
                        disabled={this.state.buttonIr}
                        onPress={() => this.ir()}>
                        <ImageBackground
                            style={{ width: metrics.screenWidth * 0.21, height: metrics.screenHeight * 0.12 }}
                            source={require('img/footer-urss.png')}>
                            <Text style={{ padding: 2, paddingHorizontal: 10, backgroundColor: 'black', color: colors.white, alignSelf: 'center' }}>IR!</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    {/*ir*/}
                </ImageBackground>
                {/*foooter*/}
            </View >
        );
    }
}

export default TelaJogo;
