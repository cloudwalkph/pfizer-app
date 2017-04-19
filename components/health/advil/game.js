var React = require('react');
var {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} = require('react-native');

var advil_1 = require('../../../assets/img/advil_1.jpg');
var advil_capsule = require('../../../assets/img/advil_capsule.png');
var advil_capsule_gray = require('../../../assets/img/advil_capsule_1.png');

var pain_count = 0;

var AdvilGame = React.createClass({

    getInitialState() {
        return {
            advil_1: advil_1,
            advil_capsule: advil_capsule_gray,
            fadeAnim: new Animated.Value(0),
            headache: true,
            back_pain: true,
            muscle_pain: true,
            joint_pain: true,
            arthritis: true,
            pain_count: 1,
        }
    },

    componentDidMount() {

    },

    _onPress() {
        this.setState({ advil_capsule: advil_capsule });
        Animated.timing(  // Uses easing functions
            this.state.fadeAnim, // The value to drive
            {
                toValue: 1,  // Target
                duration: 1000,  // Configuration
            }, ).start();  // Don't forget start!
    },

    _cure(pain) {
        const { navigate } = this.props.navigation;
        if (pain == 'headache') {
            this.setState({
                headache: false,
                pain_count: this.state.pain_count + 1
            });
        } else if (pain == 'back_pain') {
            this.setState({
                back_pain: false,
                pain_count: this.state.pain_count + 1
            });
        } else if (pain == 'muscle_pain') {
            this.setState({
                muscle_pain: false,
                pain_count: this.state.pain_count + 1
            });
        } else if (pain == 'joint_pain') {
            this.setState({
                joint_pain: false,
                pain_count: this.state.pain_count + 1
            });
        } else if (pain == 'arthritis') {
            this.setState({
                arthritis: false,
                pain_count: this.state.pain_count + 1
            });
        }
        if (this.state.pain_count >= 5) {
            navigate('advilMedicine');
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
                    <Animated.View style={[styles.headache, { opacity: this.state.fadeAnim }]}>
                        <TouchableOpacity
                            onPress={() => this._cure('headache')}
                        >
                            {this.state.headache && <Image
                                source={require('../../../assets/img/pain_point.png')}
                                style={styles.pain_points}
                            >
                            </Image>}
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[styles.back_pain, { opacity: this.state.fadeAnim }]}>
                        <TouchableOpacity
                            onPress={() => this._cure('back_pain')}
                        >
                            {this.state.back_pain && <Image
                                source={require('../../../assets/img/pain_point.png')}
                                style={styles.pain_points}
                            >
                            </Image>}
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[styles.muscle_pain, { opacity: this.state.fadeAnim }]}>
                        <TouchableOpacity
                            onPress={() => this._cure('muscle_pain')}
                        >
                            {this.state.muscle_pain && <Image
                                source={require('../../../assets/img/pain_point.png')}
                                style={styles.pain_points}
                            >
                            </Image>}
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[styles.joint_pain, { opacity: this.state.fadeAnim }]}>
                        <TouchableOpacity
                            onPress={() => this._cure('joint_pain')}
                        >
                            {this.state.joint_pain && <Image
                                source={require('../../../assets/img/pain_point.png')}
                                style={styles.pain_points}
                            >
                            </Image>}
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[styles.arthritis, { opacity: this.state.fadeAnim }]}>
                        <TouchableOpacity
                            onPress={() => this._cure('arthritis')}
                        >
                            {this.state.arthritis && <Image
                                source={require('../../../assets/img/pain_point.png')}
                                style={styles.pain_points}
                            >
                            </Image>}
                        </TouchableOpacity>
                    </Animated.View>
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var dot_radius = 25;
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
        top: 110 - dot_radius,
        right: 135 - dot_radius,
    },
    back_pain: {
        position: 'absolute',
        top: 195 - dot_radius,
        right: 110 - dot_radius,
    },
    muscle_pain: {
        position: 'absolute',
        top: 210 - dot_radius,
        right: 230 - dot_radius,
    },
    joint_pain: {
        position: 'absolute',
        top: 440 - dot_radius,
        right: 210 - dot_radius,
    },
    arthritis: {
        position: 'absolute',
        top: 520 - dot_radius,
        right: 105 - dot_radius,
    },
})

module.exports = AdvilGame;