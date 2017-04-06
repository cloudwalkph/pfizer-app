var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

const menuItems = [
    {
        name: 'wellness',
        icon: require('../assets/img/wellness.png'),
        label: 'Wellness'
    },
    {
        name: 'health',
        icon: require('../assets/img/health.png'),
        label: 'Health'
    },
    {
        name: 'pedia',
        icon: require('../assets/img/pedia.png'),
        label: 'Pedia'
    },
];

var Menu = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/img/bg_menu.jpg')}
                    style={styles.backgroundImage}
                >
                    {menuItems.map(function (v, i) {
                        return (
                            <View style={styles.rowItem} key={i}>
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
                                        <Text style={styles.menuLabel}>{v.label}</Text>
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
        width: width,
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(149,149,149,0.5)',
        margin: 5,
        borderRadius: 10,
    },
    img: {
        height: height / 10,
        width: width / 3,
        resizeMode: 'stretch',
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
})

module.exports = Menu;