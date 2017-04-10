var React = require('React');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = require('react-native');

var bg = require('../../assets/img/bg_pedia.jpg');
var multivitamins = require('../../assets/img/multivitamins.png');
var cough_icon = require('../../assets/img/cough_icon.png');
var colds_icon = require('../../assets/img/colds_icon.png');
var pedia = require('../../assets/img/pedia.png');

var Pedia = React.createClass({
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={bg}
                    style={styles.backgroundImage}
                >
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Image
                                    source={multivitamins}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel, { fontSize: 20 }]}>CHILDREN&rsquo;S</Text>
                                <Text style={[styles.menuLabel]}>MULTIVITAMINS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => navigate('coughKids')}
                        >
                            <View style={styles.menuItem}>
                                <Image
                                    source={cough_icon}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>COUGH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Image
                                    source={colds_icon}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>COLDS &amp; ALLERGIES</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                        >
                            <View style={styles.menuItem}>
                                <Image
                                    source={pedia}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>BODY &amp; BRAIN</Text>
                                <Text style={[styles.menuLabel, { fontSize: 20 }]}>DEVELOPMENT</Text>
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
        height: height / 8,
        resizeMode: 'contain',
    },
    menuLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

module.exports = Pedia;