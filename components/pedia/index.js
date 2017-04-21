var React = require('React');
var {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
} = require('react-native');
var { MenuItem } = require('../commons/menuItem');

var Pedia = React.createClass({

    getDefaultProps() {
        return {
            pedia: [
                {
                    name: 'appetite',
                    nav: 'clusivol',
                    icon: require('../../assets/img/multivitamins.png'),
                    label: 'appetite & immunity'.toUpperCase()
                },
                {
                    name: 'coughkids',
                    nav: 'robikids',
                    icon: require('../../assets/img/cough_icon.png'),
                    label: 'cough relief'.toUpperCase()
                },
                {
                    name: 'colds',
                    nav: 'dimetappMedicine',
                    icon: require('../../assets/img/colds_icon.png'),
                    label: 'cold relief'.toUpperCase()
                },
                {
                    name: 'antianemia',
                    nav: 'increminMedicine',
                    icon: require('../../assets/img/pedia.png'),
                    label: 'anti-anemia'.toUpperCase()
                },
                {
                    name: 'feverkids',
                    nav: 'advilSuspensionMedicine',
                    icon: require('../../assets/img/flu_icon.png'),
                    label: 'fever & pain relief'.toUpperCase()
                },
            ]
        }
    },

    _onPress(val) {
        const { navigate } = this.props.navigation;
        navigate(val);
    },

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/bg_pedia.jpg')}
                    style={styles.backgroundImage}
                >

                    {this.props.pedia.map(function (v, i) {
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
            </View >
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
});

module.exports = Pedia;