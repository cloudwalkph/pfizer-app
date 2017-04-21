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

var bgPainRecommend = require('../../../assets/img/pain_recommends.jpg');
var bgAdvil = require('../../../assets/img/advil.jpg');

var AdvilMedicine = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewPagerAndroid style={styles.container} initialPage={0}>
                <View>
                    <Image
                        source={bgPainRecommend}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.recommend}>
                            <TouchableOpacity
                                onPress={() => navigate('advilMedicine')}
                            >
                                <Recommend></Recommend>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                <View>
                    <Image
                        source={bgAdvil}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.next}>
                            <TouchableOpacity
                                onPress={() => navigate('CustomerDetails')}
                            >
                                <Next></Next>
                            </TouchableOpacity>
                        </View>
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
    },
    recommend: {
        top: 630
    },
    next: {
        top: 750,
    }
})

module.exports = AdvilMedicine;