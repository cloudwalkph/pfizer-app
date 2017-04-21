var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var { MenuItem } = require('../commons/menuItem');

var Health = React.createClass({

    getDefaultProps() {
        return {
            health: [
                {
                    nav: 'advil',
                    icon: require('../../assets/img/pain_icon.png'),
                    label: 'pain'.toUpperCase()
                },
                {
                    nav: 'cough',
                    icon: require('../../assets/img/cough_icon.png'),
                    label: 'cough'.toUpperCase()
                },
                {
                    nav: 'advil',
                    icon: require('../../assets/img/flu_icon.png'),
                    label: 'flu / fever'.toUpperCase()
                },
            ]
        }
    },

    _onPress(val) {
        const { navigate } = this.props.navigation;
        navigate(val);
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/bg_health.jpg')}
                    style={styles.backgroundImage}
                >
                    {this.props.health.map(function (v, i) {
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
        );
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
});

module.exports = Health;