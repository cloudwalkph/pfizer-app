var React = require('react');

var {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var MenuItem = React.createClass({

    getDefaultProps() {
        return {
            nav: '',
            icon: '',
            label: '',
        }
    },

    getInitialState(){
        return {
            nav: this.props.nav,
            icon: this.props.icon,
            label: this.props.label,
        }
    },

    _onPress(menu) {
        this.props.onPress(menu);
    },

    render() {
        return (
            <View
                style={styles.flexRow}
            >
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => this._onPress(this.state.nav)}
                >
                    <Animated.View style={styles.menuItem}>
                        <Image
                            source={this.state.icon}
                            style={styles.img}
                        >
                        </Image>

                        <Text
                            style={styles.menuLabel}
                        >
                            {this.state.label.toUpperCase()}
                        </Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItem: {
        alignItems: 'center',
        backgroundColor: 'rgba(149,149,149,0.7)',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        margin: 3,
    },
    img: {
        flex: 1,
        resizeMode: 'contain',
    },
    menuLabel: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

module.exports = { MenuItem };