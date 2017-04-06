var React = require('react');
var {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = require('react-native');

var Menu = React.createClass({

    _onPressButton: function (el) {
        console.log(el);
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={this._onPressButton} style={styles.menu}>
                    <View>
                        <Image
                            source={require('../assets/img/care.gif')}
                            style={styles.img}
                        >
                        </Image>
                        <Text style={styles.text}>Wellness</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigate('healthCough')} style={styles.menu}>
                    <View>
                        <Image
                            source={require('../assets/img/cardiogram.gif')}
                            style={styles.img}
                        >
                        </Image>
                        <Text style={styles.text}>Health</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressButton} style={styles.menu}>
                    <View>
                        <Image
                            source={require('../assets/img/pedia.gif')}
                            style={styles.img}
                        >
                        </Image>
                        <Text style={styles.text}>Pedia</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 10,
    },
    img: {
        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})

module.exports = Menu;