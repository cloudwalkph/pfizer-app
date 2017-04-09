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
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        width: width,
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
        height: height / 10,
        width: width / 10,
        resizeMode: 'contain',
        margin: 10
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

module.exports = Pedia;