var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} = require('react-native');

const check = require('../../assets/img/check.png');
const next = require('../../assets/img/next.png');

var Recommend = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={check}
                    style={styles.check}
                >
                </Image>
                <Text style={styles.label}>{'recommend'.toUpperCase()}</Text>
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
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(149,149,149,1)',
        borderRadius: 5,
        flexDirection: 'row',
        height: 60,
        padding: 10,
        width: 250,
    },
    check: {
        flex: 1,
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