var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var bg_health = require('../../assets/img/bg_health.jpg');

var Health = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bg_health}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <View style={styles.rowItem}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('pain')}>
                                <View style={styles.menuItem}>
                                    <Text style={styles.menuLabel}>pain</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowItem}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('cough')}>
                                <View style={styles.menuItem}>
                                    <Text style={styles.menuLabel}>cough</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowItem}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('flu')}>
                                <View style={styles.menuItem}>
                                    <Text style={styles.menuLabel}>flu / fever</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row'
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(149,149,149,0.5)',
        margin: 5,
        borderRadius: 10,
    },
    menuLabel: {
        color: 'white',
        fontSize: 30,
    }
});

module.exports = Health;