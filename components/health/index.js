var React = require('react');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var Health = React.createClass({

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/bg_menu.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.rowItem}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('pain')}>
                            <View style={styles.menuItem}>
                                <Text style={styles.menuLabel}>pain</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('soreThroat')}>
                            <View style={styles.menuItem}>
                                <Text style={styles.menuLabel}>sore throat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('soreThroat')}>
                            <View style={styles.menuItem}>
                                <Text style={styles.menuLabel}>cough</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('soreThroat')}>
                            <View style={styles.menuItem}>
                                <Text style={styles.menuLabel}>cold</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('soreThroat')}>
                            <View style={styles.menuItem}>
                                <Text style={styles.menuLabel}>flu / fever</Text>
                            </View>
                        </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: width
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

Health.navigationOptions = {
    title: 'Health',
};

module.exports = Health;