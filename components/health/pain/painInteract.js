var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} = require('react-native');

var advil_1 = require('../../../assets/img/advil_1.jpg');
var advil_capsule = require('../../../assets/img/advil_capsule.png');
var advil_capsule_gray = require('../../../assets/img/advil_capsule_1.png');

var PainInteract = React.createClass({

    getInitialState() {
        return {
            advil_1: advil_1,
            advil_capsule: advil_capsule_gray
        }
    },

    _onPress() {
        this.setState({ advil_capsule: advil_capsule })
    },

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={this.state.advil_1}
                    style={styles.backgroundImage}
                    onError={(error) => this.setState({ advil_1, advil_1 })}
                >
                    <View style={styles.capsuleContainer}>
                        <TouchableNativeFeedback
                            onPress={() => this._onPress()}
                        >
                            <Image
                                source={this.state.advil_capsule}
                                style={styles.advilCapsule}
                            >
                            </Image>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.headache}>
                        <Image
                            source={require('../../../assets/img/pain_point.png')}
                            style={styles.pain_points}
                        >
                        </Image>
                    </View>
                    <View style={styles.headache}>
                        <Image
                            source={require('../../../assets/img/pain_point.png')}
                            style={styles.pain_points}
                        >
                        </Image>
                    </View>
                    <View style={styles.headache}>
                        <Image
                            source={require('../../../assets/img/pain_point.png')}
                            style={styles.pain_points}
                        >
                        </Image>
                    </View>
                    <View style={styles.headache}>
                        <Image
                            source={require('../../../assets/img/pain_point.png')}
                            style={styles.pain_points}
                        >
                        </Image>
                    </View>
                    <View style={styles.headache}>
                        <Image
                            source={require('../../../assets/img/pain_point.png')}
                            style={styles.pain_points}
                        >
                        </Image>
                    </View>
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var dot_radius = 20;
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
    capsuleContainer: {
        position: 'absolute',
        top: 280
    },
    advilCapsule: {
        width: 240,
        resizeMode: 'contain',
    },
    pain_points: {
        height: dot_radius * 2,
        width: dot_radius * 2,
        resizeMode: 'contain'
    },
    headache: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    muscle_pain: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    back_pain: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    joint_pain: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    arthritis: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
})

module.exports = PainInteract;