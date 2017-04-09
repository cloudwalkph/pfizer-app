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
                <View style={styles.whiteBar}>
                    
                </View>
                <TouchableOpacity onPress={() => navigate('customerAgeGender')} style={{ height: 60, marginTop: 10,backgroundColor: '#25b5e9',justifyContent: 'center',alignItems: 'center'}} activeOpacity={0.7}>
                    <Text style={{fontWeight:'bold',color: '#fff'}}>BEGIN ></Text>
                </TouchableOpacity>
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
        resizeMode: 'stretch',
    },
    logoContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    logo: {
        height: 400,
        width: 400,
    },
    whiteBar: {
        flex: 2,
    },
    beginBar: {
        alignItems: 'center',
        backgroundColor: '#25b5e9',
        flex: 1,
        justifyContent: 'center',
    },
});