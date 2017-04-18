import React, { Component } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.bg}>
                    <Image
                        source={require('../assets/img/bg.jpg')}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require("../assets/img/logo.png")}
                            >
                            </Image>
                        </View>
                    </Image>
                </View>
                <View
                    style={styles.beginBtnContainer}
                >
                    <TouchableOpacity
                        onPress={() => navigate('customerAgeGender')}
                    >
                        <Image
                            source={require('../assets/img/bg_button.jpg')}
                            style={styles.beginBtn}
                        >
                            <Text style={styles.beginBtnLabel}>BEGIN ></Text>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
    bg: {
        alignItems: 'center',
        flex: 10,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        resizeMode: 'contain'
    },
    whiteBar: {
        flex: 2,
    },
    beginBtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    beginBtn: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    beginBtnLabel: {
        fontSize: 25,
        color: '#fff'
    }
});