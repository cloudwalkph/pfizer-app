var React = require('react');
var {
    Button,
    Dimensions,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} = require('react-native');

var Agreement = require('./agreement');

var CustomerDetails = React.createClass({

    getInitialState() {
        return {
            animationType: 'none',
            modalVisible: false,
            transparent: true,
            selectedSupportedOrientation: 0,
            currentOrientation: 'unknown',
        }
    },

    componentDidMount() {
        this.setState({
            modalVisible: true
        })
    },

    _onInput(text) {
        this.setState({ text })
    },

    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    },

    _setAnimationType(type) {
        this.setState({ animationType: type });
    },

    _toggleTransparent() {
        this.setState({ transparent: !this.state.transparent });
    },

    render() {
        var modalBackgroundStyle = { backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff', };
        var innerContainerTransparentStyle = this.state.transparent ? { backgroundColor: 'rgba(225, 225, 225, 1)', padding: 20 } : null; 
        var activeButtonStyle = { backgroundColor: '#ddd' };
        return (
            <ScrollView>

                <Modal
                    animationType={"slide"}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >

                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <ScrollView>
                                <Text
                                    style={styles.agreementTitle}
                                >{'Consent Form'.toUpperCase()}</Text>
                                <Text
                                    style={styles.agreementContent}
                                >{Agreement}</Text>
                            </ScrollView>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this._setModalVisible(false)}
                                >
                                    <Image
                                        source={require('../../assets/img/green_button.png')}
                                        style={styles.modalButton}
                                    >
                                        <Text
                                        style={styles.modalButtonLabel}
                                        >{'I Agree'.toUpperCase()}</Text>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Modal>

                <Image
                    source={require('../../assets/img/bg.jpg')}
                    style={styles.backgroundImage}
                >
                    <View
                        style={[styles.logoContainer]}
                    >
                        <Image
                            source={require('../../assets/img/logo.png')}
                            style={styles.logo}
                        >
                        </Image>
                    </View>
                    <View
                        style={styles.formContainer}
                    >
                        <Text
                            style={styles.formLabel}
                        >{'Name'.toUpperCase()}</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder=""
                            onChangeText={this._onInput}
                        />
                    </View>
                    <View
                        style={styles.formContainer}
                    >
                        <Text
                            style={styles.formLabel}
                        >{'Contact No.'.toUpperCase()}</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder=""
                            onChangeText={this._onInput}
                        />
                    </View>
                    <View
                        style={styles.formContainer}
                    >
                        <Text
                            style={styles.formLabel}
                        >{'Email'.toUpperCase()}</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder=""
                            onChangeText={this._onInput}
                        />
                    </View>
                    <View
                        style={styles.thankYouContainer}
                    >
                        <Text
                            style={styles.thankYou}
                        >{'Thank You!'.toUpperCase()}</Text>
                    </View>
                    <View
                        style={styles.doneBtnContainer}
                    >
                        <TouchableOpacity>
                            <Image
                                style={styles.doneBtnBg}
                                source={require('../../assets/img/bg_button.jpg')}
                            >
                                <Text
                                    style={styles.doneBtn}
                                >{'Done'.toUpperCase()}</Text>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </Image>

            </ScrollView>
        )
    }
});

var { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    agreementTitle: {
        fontSize: 40,
        color: 'rgba(92, 92, 92, 92)',
        textAlign: 'center',
    },
    agreementContent: {
        fontSize: 25,
        color: 'rgba(92, 92, 92, 92)',
        textAlign: 'justify',
    },
    modalButton: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    modalButtonLabel: {
        fontSize: 50,
        color: 'white'
    },

    backgroundImage: {
        flex: 1,
        height: height - 80,
        width: width,
    },
    logoContainer: {
        flex: 4,
        alignItems: 'center'
    },
    logo: {
        height: 200,
        resizeMode: 'contain',
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
    },
    formLabel: {
        color: 'rgba(7, 115, 186, 1)',
        fontSize: 25,
    },
    formInput: {
        backgroundColor: 'white',
        width: 400,
    },
    thankYouContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thankYou: {
        color: 'rgba(36, 181, 233, 1)',
        fontSize: 50
    },
    doneBtnContainer: {
        flex: 1,
        alignItems: 'center',
    },
    doneBtnBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    doneBtn: {
        fontSize: 30,
        color: 'rgba(255, 255, 255, 1)'
    }

});

module.exports = CustomerDetails;