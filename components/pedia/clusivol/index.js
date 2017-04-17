var React = require('react');
var {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} = require('react-native');
var { Recommend, Next } = require('../../commons/buttons');

var gray_button = require('../../../assets/img/gray_button.png');
var blue_button = require('../../../assets/img/blue_button.png');

var bg = require('./img/clusivol.jpg');
var bg2 = require('./img/clusivol2.jpg');
var bgRecommend = require('./img/clusivol3.jpg');
var bgMedicine = require('./img/clusivol4.jpg');
var nega = require('./img/nega.png');

var Clusivol = React.createClass({

    getDefaultProps() {
        return {
            bgImage: bg
        }
    },

    getInitialState() {
        return {
            ideaButton: gray_button,
            bgImage: this.props.bgImage
        }
    },

    _gameOn() {
        this.setState({
            bgImage: bg2,
            ideaButton: blue_button
        });
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={this.state.bgImage}
                    style={styles.backgroundImage}
                >
                    <View>
                        <TouchableWithoutFeedback
                            onPress={this._gameOn}
                        >
                            <Image
                                source={this.state.ideaButton}
                                style={styles.ideaButton}
                            ></Image>
                        </TouchableWithoutFeedback>
                    </View>
                    <View
                        style={styles.nega}
                    >
                        <Image
                            source={nega}
                            style={
                                {
                                    height: 500,
                                    resizeMode: 'contain',
                                }
                            }
                        >

                        </Image>
                    </View>
                    <View
                        style={styles.nextPos}
                    >
                        <TouchableOpacity
                            onPress={() => navigate('clusivolRecommend')}
                        >
                            <Text
                                style={{ color: 'white', fontSize: 30 }}
                            >Next ></Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }

});

var ClusivolRecommend = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bgRecommend}
                    style={styles.backgroundImage}
                >
                    <View style={styles.recommend}>
                        <TouchableOpacity
                            onPress={() => navigate('clusivolMedicine')}
                        >
                            <Recommend></Recommend>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }

});

var ClusivolMedicine = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bgMedicine}
                    style={styles.backgroundImage}
                >
                    <View style={styles.next}>
                        <TouchableOpacity>
                            <Next></Next>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }

});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        height: height - 80,
        width: width,
        resizeMode: 'cover'
    },
    ideaButton: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    },
    recommend: {
        top: 750
    },
    nega: {
        left: 240,
        top: 10,
        position: 'absolute'
    },
    nextPos: {
        top: 700,
        left: 500
    },
    next: {
        top: 780
    }
})

module.exports = { Clusivol, ClusivolRecommend, ClusivolMedicine };