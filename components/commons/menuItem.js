var React = require('react');

var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} = require('react-native');

var MenuItem = React.createClass({

    getDefaultProps() {
        return {
            nav: '',
            icon: '',
            label: '',
            menuBGColor: 'rgba(149,149,149,0.7)',
        }
    },

    getInitialState() {
        return {
            nav: this.props.nav,
            icon: this.props.icon,
            label: this.props.label,
            menuBGColor: this.props.menuBGColor,
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
                <TouchableWithoutFeedback
                    style={{ flex: 1 }}
                    onPress={() => this._onPress(this.state.nav)}
                    onPressIn={() => this.setState({ menuBGColor: 'rgba(37,181,233,0.7)' })}
                    onPressOut={() => this.setState({ menuBGColor: this.props.menuBGColor })}
                >
                    <View
                        style={[
                            styles.menuItem,
                            { backgroundColor: this.state.menuBGColor }
                        ]}
                    >
                        <Image
                            source={this.state.icon}
                            style={styles.img}
                        >
                        </Image>

                        <Text
                            style={styles.menuLabel}
                        >
                            {this.state.label}
                        </Text>
                    </View>
                </TouchableWithoutFeedback >
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