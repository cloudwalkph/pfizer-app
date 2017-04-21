var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} = require('react-native');

const check = require('../../assets/img/check.png');
const green_button = require('../../assets/img/green_button.png');
const next = require('../../assets/img/next.png');

var Recommend = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={green_button}
                    style={styles.recommend_button}
                >
                    <View style={styles.flexRow}>
                        <Image
                            source={check}
                            style={styles.check}
                        >
                        </Image>
                        <Text style={styles.label}>{'recommend'.toUpperCase()}</Text>
                    </View>
                </Image>
            </View>
        )
    }
});

var Next = React.createClass({

    render() {
        return (
            <View>
                <Image
                    source={next}
                    style={styles.next}
                >
                </Image>
            </View>
        )
    }
});


var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recommend_button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    check: {
        flex: 2,
        resizeMode: 'contain'
    },
    label: {
        flex: 3,
        color: 'white',
        fontSize: 30,
    },
    next: {
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})

module.exports = { Recommend, Next };