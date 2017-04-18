var React = require('react');
var { DrawerNavigator } = require('react-navigation');
var {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} = require('react-native');

import Home from '../home';
import Menu from '../menu';

var BurgerMenu = React.createClass({

    _onPress() {
        alert('burger menu clicked');
    },

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Image
                        source={require('../../assets/img/menu.png')}
                        style={styles.burgerMenu}
                    />
                </TouchableOpacity>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    burgerMenu: {
        height: 30,
        margin: 10,
        resizeMode: 'contain'
    }
});

module.exports = { BurgerMenu };