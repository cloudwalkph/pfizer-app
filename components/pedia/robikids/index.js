var React = require('react');
var {
    Animated,
    Dimensions,
    Image,
    PanResponder,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} = require('react-native');
var { Next } = require('../../commons/buttons');

var rk1 = require('./img/rk1.jpg');
var rk2 = require('./img/rk2.jpg');
var idea = require('../../../assets/img/idea-copy.png');
var robibox = require('./img/robikid.png');

var phlegm1 = require('./img/phlegm1.png');
var phlegm2 = require('./img/phlegm2.png');
var phlegm3 = require('./img/phlegm3.png');
var phlegm4 = require('./img/phlegm4.png');

var Robikids = React.createClass({

    _panResponder: {},
    _previousLeft: 0,
    _previousTop: 0,
    _circleStyles: {},
    box: null,

    getInitialState() {
        return {
            rkBG: rk1,
            fadeAnim: new Animated.Value(0),
            scale: new Animated.Value(1),
            instruction: false,
            next: false,
            robibox: false,
            phlegm1: true,
            phlegm2: true,
            phlegm3: true,
            phlegm4: true,
            phlegm1Layout: null,
            phlegm2Layout: null,
            phlegm3Layout: null,
            phlegm4Layout: null,
        }
    },

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousLeft = 500;
        this._previousTop = 600;
        this._robiboxStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
            }
        };
    },

    componentDidMount() {
        this._updateNativeStyles();
    },

    _gameOn() {
        this.setState({
            instruction: true,
            robibox: true,
        });
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }, ).start();
    },

    _highlight: function () {
        Animated.spring(
            this.state.scale,
            { toValue: 1.1, friction: 3 }
        ).start();
    },

    _unHighlight: function () {
        Animated.spring(
            this.state.scale,
            { toValue: 1, friction: 3 }
        ).start();
    },

    _updateNativeStyles: function () {
        this.box && this.box.setNativeProps(this._robiboxStyles);
    },

    _handleStartShouldSetPanResponder: function (e, gestureState) {
        // Should we become active when the user presses down on the circle?
        return true;
    },

    _handleMoveShouldSetPanResponder: function (e, gestureState) {
        // Should we become active when the user moves a touch over the circle?
        return true;
    },

    _handlePanResponderGrant: function (e, gestureState) {
        this._highlight();
    },
    _handlePanResponderMove: function (e, gestureState) {
        this._robiboxStyles.style.left = this._previousLeft + gestureState.dx;
        this._robiboxStyles.style.top = this._previousTop + gestureState.dy;
        this._updateNativeStyles();

        if (this.isPhlegm1(gestureState)) {
            this.setState({
                phlegm1: false
            })
        } else if (this.isPhlegm2(gestureState)) {
            this.setState({
                phlegm2: false
            })
        } else if (this.isPhlegm3(gestureState)) {
            this.setState({
                phlegm3: false
            })
        } else if (this.isPhlegm4(gestureState)) {
            this.setState({
                phlegm4: false
            })
        }

        if (this.state.phlegm1 == false && this.state.phlegm2 == false && this.state.phlegm3 == false && this.state.phlegm4 == false) {
            this.setState({
                rkBG: rk2,
                next: true,
                robibox: false
            })
        }
    },
    _handlePanResponderEnd: function (e, gestureState) {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
    },

    setPhlegm1Layout(event) {
        this.setState({
            phlegm1Layout: event.nativeEvent.layout
        })
    },
    setPhlegm2Layout(event) {
        this.setState({
            phlegm2Layout: event.nativeEvent.layout
        })
    },
    setPhlegm3Layout(event) {
        this.setState({
            phlegm3Layout: event.nativeEvent.layout
        })
    },
    setPhlegm4Layout(event) {
        this.setState({
            phlegm4Layout: event.nativeEvent.layout
        })
    },

    isPhlegm1(gesture) {
        var dz = this.state.phlegm1Layout;
        return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
    },
    isPhlegm2(gesture) {
        var dz = this.state.phlegm2Layout;
        return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
    },
    isPhlegm3(gesture) {
        var dz = this.state.phlegm3Layout;
        return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
    },
    isPhlegm4(gesture) {
        var dz = this.state.phlegm4Layout;
        return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <Image
                    source={this.state.rkBG}
                    style={styles.backgroundImage}
                >
                    <View style={styles.flexRow}>
                        <View style={styles.idea}>
                            <TouchableOpacity
                                onPress={() => this._gameOn()}
                            >
                                <Image
                                    resizeMode="contain"
                                    source={idea}
                                    style={styles.ideaImg}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>WHAT CAUSES COUGH?</Text>
                            <Text>Respiratory diseases are usually caused by viral or</Text>
                            <Text>bacterial infections. Phlegm fills up the air passages</Text>
                            <Text>that causes coughing.</Text>
                        </View>
                    </View>

                    {this.state.phlegm1 && <View
                        onLayout={this.setPhlegm1Layout}
                        style={styles.phlegm1Container}
                    >
                        <Image source={phlegm1} style={styles.phlegm1}></Image>
                    </View>}
                    {this.state.phlegm2 && <View
                        onLayout={this.setPhlegm2Layout}
                        style={styles.phlegm2Container}
                    >
                        <Image source={phlegm2} style={styles.phlegm2}></Image>
                    </View>}
                    {this.state.phlegm3 && <View
                        onLayout={this.setPhlegm3Layout}
                        style={styles.phlegm3Container}
                    >
                        <Image source={phlegm3} style={styles.phlegm3}></Image>
                    </View>}
                    {this.state.phlegm4 && <View
                        onLayout={this.setPhlegm4Layout}
                        style={styles.phlegm4Container}
                    >
                        <Image source={phlegm4} style={styles.phlegm4}></Image>
                    </View>}

                    {this.state.instruction && <Animated.View style={[styles.instructionContainer, { opacity: this.state.fadeAnim }]}>
                        <Text style={styles.instruction}>Drag the Robikids box around</Text>
                        <Text style={styles.instruction}>the lungs to eliminate the phlegm.</Text>
                    </Animated.View>}

                    {this.state.next && <View style={styles.nextContainer}>
                        <TouchableOpacity
                            onPress={() => navigate('robikidsRecommend')}
                        >
                            <Text style={styles.next}>Next ></Text>
                        </TouchableOpacity>
                    </View>}

                    <Animated.View
                        {...this._panResponder.panHandlers}
                        ref={(box) => {
                            this.box = box;
                        }}
                        style={[,
                            styles.robiboxContainer,
                            { transform: [{ scale: this.state.scale }] },
                            { opacity: this.state.fadeAnim, backgroundColor: 'red' },
                        ]}
                    >
                        <Animated.Image
                            source={robibox}
                            style={[styles.robibox]}
                        >
                        </Animated.Image>
                    </Animated.View>

                </Image>

            </View >
        )
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        height: height - 80,
        width: width,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    idea: {
        flex: 1,
        alignItems: 'center'
    },
    ideaImg: {
        width: 70,
    },
    header: {
        flex: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    phlegm1Container: {
        position: 'absolute',
        top: 260,
        left: 250,
    },
    phlegm1: {
        width: 50,
        resizeMode: 'contain',
    },
    phlegm2Container: {
        position: 'absolute',
        top: 380,
        left: 200,
    },
    phlegm2: {
        width: 50,
        resizeMode: 'contain',
    },
    phlegm3Container: {
        position: 'absolute',
        top: 310,
        left: 310,
    },
    phlegm3: {
        width: 50,
        resizeMode: 'contain',
    },
    phlegm4Container: {
        position: 'absolute',
        top: 400,
        left: 310,
    },
    phlegm4: {
        width: 50,
        resizeMode: 'contain',
    },
    instructionContainer: {
        position: 'absolute',
        top: 700,
        left: 50,
    },
    instruction: {
        width: 390,
        fontSize: 20,
        color: 'white'
    },
    robiboxContainer: {
        position: 'absolute',
    },
    robibox: {
        height: 100,
        width: 45,
        resizeMode: 'contain'
    },
    nextContainer: {
        position: 'absolute',
        top: 760,
        right: 30
    },
    next: {
        fontSize: 40,
        color: 'white'
    }
})

module.exports = Robikids;