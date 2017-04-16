var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} = require('react-native');

var { Recommend } = require('../../commons/buttons');

var rk3 = require('./img/rk3.jpg');

var RobikidsRecommend = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={rk3}
                    style={styles.backgroundImage}
                >
                    <View style={styles.recommend}>
                        <TouchableOpacity
                            onPress={() => navigate('robikidsMedicine')}
                        >
                            <Recommend></Recommend>
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
    },
    recommend: {
        top: 700,
    },
})

module.exports = RobikidsRecommend;