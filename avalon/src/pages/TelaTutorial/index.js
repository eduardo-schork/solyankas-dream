import React, { Component } from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

class TelaJogo extends Component {
    constructor() {
        super();
        this.state = {
            texto: 'PAUSINHO GOSTOSINHO NO TEU CUSINHO DE TUTORIALSINHO',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <View style={styles.containerImg}>
                        <Image
                            style={styles.stalinImg}
                            source={require('img/tutorial-stalin.png')} />
                        <Image />
                    </View>
                </View>
                <View style={styles.containerChat}>
                    <Text style={styles.textChat}>{this.state.texto}</Text>
                </View>
            </View>
        );
    }
}

export default TelaJogo;
