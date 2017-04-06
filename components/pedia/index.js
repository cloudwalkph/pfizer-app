var React = require('React');
var {
    Text,
    View,
} = require('react-native');

var Pedia = React.createClass({
    render() {
        return(
            <View>
                <Text>Pedia</Text>
            </View>
        )
    }
});

Pedia.navigationOptions = {
    title: 'Pedia',
};

module.exports = Pedia;