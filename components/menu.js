var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');
var { MenuItem } = require('./commons/menuItem');

var bg_menu = require('../assets/img/bg_menu.jpg'),
    wellness_icon = require('../assets/img/wellness.png'),
    health_icon = require('../assets/img/health.png'),
    pedia_icon = require('../assets/img/pedia.png');

const menuItems = [
    {
        nav: 'wellness',
        icon: wellness_icon,
        label: 'Wellness'
    },
    {
        nav: 'health',
        icon: health_icon,
        label: 'Health'
    },
    {
        nav: 'pedia',
        icon: pedia_icon,
        label: 'Pedia'
    },
];

var Menu = React.createClass({

    _onPress(val) {
        const { navigate } = this.props.navigation;
        navigate(val);
    },

    render() {
        
        return (
            <View style={styles.container}>
                <Image
                    source={bg_menu}
                    style={styles.backgroundImage}
                >
                    {menuItems.map(function (v, i) {
                        return (
                            <MenuItem 
                                key={i}
                                onPress={this._onPress}
                                nav={v.nav}
                                icon={v.icon}
                                label={v.label}
                            />
                        )
                    }.bind(this))}
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        height: height - 80,
        width: width,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
});

module.exports = Menu;