var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} = require('react-native');

var advil_1 = require('../../../assets/img/advil_1.jpg');

var PainInteract = React.createClass({

    getInitialState() {
        return {
            advil_1: advil_1,
            advil_capsule: require('../../../assets/img/advil_capsule_1.png')
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={this.state.advil_1}
                    style={styles.backgroundImage}
                    onError={(error) => this.setState({ advil_1, advil_1 })}
                >
                    <Image
                        source={this.state.advil_capsule}
                        style={styles.advilCapsule}
                    >
                    </Image>
                    <Image
                        source={require('../../../assets/img/pain_point.png')}
                        style={styles.pain_points}
                    >
                    </Image>
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var dot_radius = 5;
var midH = height / 2;
var midW = width / 2;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        height: height,
        width: width,
    },
    advilCapsule: {
        flex: 1,
        height: 50,
        resizeMode: 'contain'
    },
    pain_points: {
        height: dot_radius * 2,
        width: dot_radius * 2,
        resizeMode: 'contain'
    }
})

module.exports = PainInteract;