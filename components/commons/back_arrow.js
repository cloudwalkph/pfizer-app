var React = require('react');

var {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} = require('react-native');

var BackArrow = React.createClass({

    _onPress() {
        alert('back arrow clicked');
    },

    render() {
        return (
            <TouchableOpacity onPress={() => this._onPress()}>
                <View>
                    <Image
                        source={require('../../assets/img/back_arrow.png')}
                        style={styles.backArrow}
                    />
                </View>
            </TouchableOpacity>
        )
    }
});

var styles = StyleSheet.create({
    backArrow: {
        height: 30,
        margin: 10,
        resizeMode: 'contain'
    }
});

module.exports = { BackArrow };