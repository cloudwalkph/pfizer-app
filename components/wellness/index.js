var React = require('React');
var {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} = require('react-native');

var { height, width } = Dimensions.get('window');

var Wellness = React.createClass({
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Wellness</Text>
            </View>
        )
    }
});

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(149,149,149,0.5)',
        margin: 5,
        borderRadius: 10,
    },
    img: {
        height: height / 10,
        width: width / 3,
        resizeMode: 'stretch',
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
})

Wellness.navigationOptions = {
    title: 'Wellness',
};

module.exports = Wellness;