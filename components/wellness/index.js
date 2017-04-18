var React = require('React');
var {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} = require('react-native');

var bg_menu = require('../../assets/img/bg.jpg');
var multivitamins = require('../../assets/img/multivitamins.png');
var stress_beauty_energy = require('../../assets/img/stress_beauty_energy.png');
var bone_health = require('../../assets/img/bone_health.png');
var chapped_lips = require('../../assets/img/chapped_lips.png');

var Wellness = React.createClass({
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <Image
                    source={bg_menu}
                    style={styles.backgroundImage}
                >
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => navigate('CentrumHealthy')}
                        >
                            <View style={styles.menuItem}>
                                <Image 
                                    source={multivitamins}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel, {fontSize: 20}]}>AGE-ADJUSTED</Text>
                                <Text style={[styles.menuLabel]}>MULTIVITAMINS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => navigate('Stresstabs')}
                        >
                            <View style={styles.menuItem}>
                                <Image 
                                    source={stress_beauty_energy}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>STRESS, BEAUTY &amp; ENERGY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => navigate('Caltrate')}
                        >
                            <View style={styles.menuItem}>
                                <Image 
                                    source={bone_health}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>BONE HEALTH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowItem}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => navigate('ChapStick')}
                        >
                            <View style={styles.menuItem}>
                                <Image 
                                    source={chapped_lips}
                                    style={styles.img}
                                >
                                </Image>
                                <Text style={[styles.menuLabel]}>CHAPPED LIPS</Text>
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

module.exports = Wellness;