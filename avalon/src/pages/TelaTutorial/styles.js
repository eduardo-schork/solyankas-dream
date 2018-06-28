import {
    StyleSheet,
} from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.redDarker,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    containerImg: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: metrics.screenHeight * 0.8,
    },

    stalinImg:{
        height: metrics.screenHeight * 0.7,
        width: metrics.screenWidth * 0.7
    },

    containerChat: {
        width: '100%',
        height: metrics.screenHeight * 0.2,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.secundary
    },

    textChat: {
        padding: 4,
        color: colors.black,
        fontSize: metrics.screenHeight * 0.02,
        fontWeight: 'bold'
    }
});

export default styles;
