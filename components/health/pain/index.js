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

var pain_points = require('./img/painpoints.jpg');

var Pain = React.createClass({

    getInitialState() {
        return {
            arthritis: new Animated.Value(0),
            backpain: new Animated.Value(0),
            headache: new Animated.Value(0),
            jointpain: new Animated.Value(0),
            musclepain: new Animated.Value(0),
            blueButton: new Animated.Value(0)
        }
    },

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.arthritis, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.backpain, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.headache, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.jointpain, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.musclepain, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.blueButton, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={pain_points}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <Animated.View style={[styles.posArthritis, { opacity: this.state.arthritis }]}>
                            <Image source={require('./img/arthritis.png')} />
                        </Animated.View>
                        <Animated.View style={[styles.posBackPain, { opacity: this.state.backpain }]}>
                            <Image source={require('./img/backpain.png')} />
                        </Animated.View>
                        <Animated.View style={[styles.posHeadache, { opacity: this.state.headache }]}>
                            <Image source={require('./img/headache.png')} />
                        </Animated.View>
                        <Animated.View style={[styles.posJoint, { opacity: this.state.jointpain }]}>
                            <Image source={require('./img/joint.png')} />
                        </Animated.View>
                        <Animated.View style={[styles.posMuscle, { opacity: this.state.musclepain }]}>
                            <Image source={require('./img/musclepain.png')} />
                        </Animated.View>
                    </View>
                    <View style={styles.actionContainer}>
                        <Animated.View style={[styles.blueButtonContainer, { opacity: this.state.blueButton }]}>
                            <TouchableOpacity onPress={() => navigate('painInteract')} >
                                <Image
                                    source={require('../../../assets/img/blue_button.png')}
                                    style={styles.blueButton}
                                >

                                </Image>
                            </TouchableOpacity>
                        </Animated.View>
                        <Text
                            style={styles.takeAdvil}
                        >
                            {'take advil'.toUpperCase()}
                        </Text>
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
        height: height - 80,
        width: width,
    },
    actionContainer: {
        marginBottom: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    blueButtonContainer: {
        flex: 3,
        alignItems: 'flex-end',
    },
    blueButton: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
    takeAdvil: {
        color: 'rgba(125,186,0,1)',
        marginLeft: 40,
        flex: 4,
        fontWeight: 'bold',
        fontSize: 40
    },
    posArthritis: {
        position: 'absolute',
        left: 320,
        top: 470,
    },
    posBackPain: {
        position: 'absolute',
        left: 310,
        top: 155,
    },
    posHeadache: {
        position: 'absolute',
        left: 280,
        top: 70,
    },
    posJoint: {
        position: 'absolute',
        left: 90,
        top: 400,
    },
    posMuscle: {
        position: 'absolute',
        left: 85,
        top: 165,
    },
})

module.exports = Pain;