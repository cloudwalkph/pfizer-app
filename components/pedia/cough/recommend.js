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
var { Next } = require('../../commons/buttons');

var rk3 = require('./img/rk3.jpg');

var CoughKidsRecommend = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={rk3}
                    style={styles.backgroundImage}
                >
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
})

module.exports = CoughKidsRecommend;