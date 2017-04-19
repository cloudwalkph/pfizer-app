var React = require('react');
var {
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

var rk3 = require('./img/rk3.jpg');
var rk4 = require('./img/rk4.jpg');

var Robikids1 = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewPagerAndroid style={styles.container} initialPage={0}>
                <View style={[styles.container]}>
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
                <View style={styles.container}>
                    <Image
                        source={rk4}
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
        top: 700,
    },
    next: {
        top: 750,
    }
})

module.exports = Robikids1;