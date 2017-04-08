var React = require('React');
var {
    Dimensions,
    Image,
    Text,
    View,
} = require('react-native');

var { height, width } = Dimensions.get('window');

var Wellness = React.createClass({
    render() {
        return(
            <View>
            </View>
        )
    }
});

Wellness.navigationOptions = {
    title: 'Wellness',
};

module.exports = Wellness;