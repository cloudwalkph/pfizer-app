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
    ViewPagerAndroid,
} = require('react-native');

var { Recommend, Next } = require('../../commons/buttons');

var bgRecommend = require('./img/loviscol.jpg');
var bgMedicine = require('./img/loviscol2.jpg');

var Loviscol1 = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewPagerAndroid style={styles.container} initialPage={0}>
                <View style={styles.container}>
                    <Image
                        source={bgRecommend}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.recommend}>
                            <TouchableOpacity
                                onPress={() => navigate('loviscolMedicine')}
                            >
                                <Recommend></Recommend>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                <View>
                    <Image
                        source={bgMedicine}
                        style={styles.backgroundImage}
                    >
                    </Image>
                </View>
            </ViewPagerAndroid>
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
        resizeMode: 'stretch'
    },
    recommend: {
        top: 750
    }
});

module.exports = { Loviscol1 };