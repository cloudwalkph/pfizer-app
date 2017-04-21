var React = require('React');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} = require('react-native');
var { MenuItem } = require('../commons/menuItem');

var bg_menu = require('../../assets/img/bg.jpg');
var multivitamins = require('../../assets/img/multivitamins.png');
var stress_beauty_energy = require('../../assets/img/stress_beauty_energy.png');
var bone_health = require('../../assets/img/bone_health.png');
var chapped_lips = require('../../assets/img/chapped_lips.png');

const menuItems = [

];

var Wellness = React.createClass({

    getDefaultProps() {
        return {
            wellness: [
                {
                    nav: 'CentrumHealthy',
                    icon: multivitamins,
                    label: <Text>
                        <Text style={{ fontSize: 20 }}>{'age-adjusted\n'.toUpperCase()}</Text>
                        <Text>{'multivitamins'.toUpperCase()}</Text>
                    </Text>,
                },
                {
                    nav: 'Stresstabs',
                    icon: stress_beauty_energy,
                    label: 'stress, beauty, & energy'.toUpperCase()
                },
                {
                    nav: 'Caltrate',
                    icon: bone_health,
                    label: 'bone health'.toUpperCase()
                },
                {
                    nav: 'ChapStick',
                    icon: chapped_lips,
                    label: 'chapped lips'.toUpperCase()
                },
            ]
        }
    },

    getInitialState() {
        return {
            menuBGColor: 'rgba(149,149,149,0.7)',
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
                    source={bg_menu}
                    style={styles.backgroundImage}
                >

                    {this.props.wellness.map(function (v, i) {
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        height: height - 80,
        width: width,
    },
});

module.exports = Wellness;