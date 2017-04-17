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
var { Recommend } = require('../../commons/buttons');

var bgRecommend = require('./img/dimetapp.jpg');
var bgMedicine = require('./img/dimetapp2.jpg');

var Dimetapp1 = React.createClass({

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
                            onPress={() => navigate('dimetappMedicine')}
                        >
                            <Recommend></Recommend>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }
});

var Dimetapp2 = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bgMedicine}
                    style={styles.backgroundImage}
                >
                </Image>
            </View>
        )
    }

})

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        height: height - 80,
        width: width,
        resizeMode: 'stretch'
    },
    recommend: {
        top: 750
    }
})

module.exports = { Dimetapp1, Dimetapp2 };