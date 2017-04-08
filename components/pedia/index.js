var React = require('React');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var bg_menu = require('../../assets/img/bg_menu.jpg');

var Pedia = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={bg_menu}
                    style={styles.backgroundImage}
                >
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Text style={[styles.menuLabel, {fontSize: 20}]}>CHILDREN&rsquo;S</Text>
                                <Text style={[styles.menuLabel]}>MULTIVITAMINS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Text style={[styles.menuLabel]}>COUGH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Text style={[styles.menuLabel]}>COLDS &amp; ALLERGIES</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Text style={[styles.menuLabel]}>BODY &amp; BRAIN</Text>
                                <Text style={[styles.menuLabel, {fontSize: 20}]}>DEVELOPMENT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        height: height - 80,
        width: width,
        resizeMode: 'contain'
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(149,149,149,0.7)',
        margin: 5,
        borderRadius: 10,
    },
    img: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    }
});

module.exports = Pedia;