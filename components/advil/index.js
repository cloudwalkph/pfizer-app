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
var { Next } = require('../commons/buttons');

var bgAdvil = require('../../assets/img/advil.jpg');

var Advil = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bgAdvil}
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
    },
    next: {
        top: 750,
    }
})

module.exports = Advil;