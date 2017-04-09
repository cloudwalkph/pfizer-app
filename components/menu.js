var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var bg_menu = require('../assets/img/bg_menu.jpg'),
    wellness_icon = require('../assets/img/wellness.png'),
    health_icon = require('../assets/img/health.png'),
    pedia_icon = require('../assets/img/pedia.png');

const menuItems = [
    {
        name: 'wellness',
        icon: wellness_icon,
        label: 'Wellness'
    },
    {
        name: 'health',
        icon: health_icon,
        label: 'Health'
    },
    {
        name: 'pedia',
        icon: pedia_icon,
        label: 'Pedia'
    },
];

var Menu = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bg_menu}
                    style={styles.backgroundImage}
                >
                    {menuItems.map(function (v, i) {
                        return (
                            <View key={i} style={styles.rowItem}>
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => navigate(v.name)}
                                    style={{ flex: 1 }}
                                >
                                    <View style={styles.menuItem}>
                                        <Image
                                            source={v.icon}
                                            style={styles.img}
                                        >
                                        </Image>
                                        <Text style={styles.menuLabel}>{v.label.toUpperCase()}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        width: width,
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(149,149,149,0.7)',
        margin: 5,
        borderRadius: 10,
    },
    img: {
        height: height / 8,
        resizeMode: 'contain',
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
})

module.exports = Menu;