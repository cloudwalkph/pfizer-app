var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var pain_points = require('../../../assets/img/pain_points.jpg');

var Pain = React.createClass({

    getInitialState() {
        return {
            pain_points: pain_points,
        }
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={this.state.pain_points}
                    style={styles.backgroundImage}
                >
                    <View style={styles.blueButtonContainer}>
                        <TouchableOpacity onPress={() => navigate('painInteract')} >
                            <Image
                                source={require('../../../assets/img/blue_button.png')}
                                style={styles.blueButton}
                            />
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var dot_radius = 10;
var midH = height / 2;
var midW = width / 2;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        height: height,
        width: width,
    },
    blueButtonContainer: {
        position: 'absolute',
        bottom: 70 - 30,
        left: 230 - 30
    },
    blueButton: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    }
})

module.exports = Pain;