var React = require('React');
var {
    Text,
    View,
} = require('react-native');

var Wellness = React.createClass({
    render() {
        return(
            <View>
                <Text>Wellness</Text>
            </View>
        )
    }
});

Wellness.navigationOptions = {
    title: 'Wellness',
};

module.exports = Wellness;