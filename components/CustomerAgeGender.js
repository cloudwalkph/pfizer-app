import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Image
} from 'react-native';
var { Next } = require('./commons/buttons');

class CustomerAgeGender extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			text: '',
			text2: ''
		};
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Image source={require('../imageSrc/bg.jpg')} style={[styles.flex1,{height: 830,width: 600}]}>
				<Text style={[styles.flex1,styles.customer1]}>CUSTOMER 1</Text>
				<Text style={[styles.flex1,styles.ageHeader]}>AGE</Text>
					<TextInput
						style={{alignSelf: 'center',height: 40,borderWidth: 1, width: 50}}
						keyboardType='numeric'
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text} />
				<Text style={[styles.flex1,styles.genderHeader]}>GENDER</Text>
				<View style={{flex: 1, flexDirection: 'row',alignSelf: 'center',marginTop: 20,marginBottom: 20,width: 270}}>
					<View style={{flex:1}}>
						<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9',justifyContent: 'center',alignItems: 'center',marginRight: 2}}>
						    <Text style={{fontWeight:'bold',color: '#fff'}}>MALE</Text>
						</TouchableOpacity>
			        </View>
			        <View style={{flex:1}}>
						<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9',justifyContent: 'center',alignItems: 'center',marginLeft: 2}}>
						    <Text style={{fontWeight:'bold',color: '#fff'}}>FEMALE</Text>
						</TouchableOpacity>
			        </View>
				</View>

				<Text style={[styles.flex1,styles.customer2]}>CUSTOMER 2</Text>
				<Text style={[styles.flex1,styles.ageHeader]}>AGE</Text>
					<TextInput
						style={{alignSelf: 'center',height: 40,borderWidth: 1, width: 50}}
						keyboardType='numeric'
				        onChangeText={(text2) => this.setState({text2})}
				        value={this.state.text2} />
				<Text style={[styles.flex1,styles.genderHeader]}>GENDER</Text>
				<View style={{flex: 1, flexDirection: 'row',alignSelf: 'center',marginTop: 20,marginBottom: 20,width: 270}}>
					<View style={{flex:1}}>
						<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9',justifyContent: 'center',alignItems: 'center',marginRight: 2}}>
						    <Text style={{fontWeight:'bold',color: '#fff'}}>MALE</Text>
						</TouchableOpacity>
			        </View>
			        <View style={{flex:1}}>
						<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9',justifyContent: 'center',alignItems: 'center',marginLeft: 2}}>
						    <Text style={{fontWeight:'bold',color: '#fff'}}>FEMALE</Text>
						</TouchableOpacity>
			        </View>
				</View>

				<View
                    style={styles.nextBtnContainer}
                >
					<TouchableOpacity onPress={() => navigate('menu')}>
						<Next></Next>
					</TouchableOpacity>
				</View>
			</Image>
		) 
	}
}

const styles = StyleSheet.create({
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	customer1: {
		marginBottom: 20,
		marginTop: 100,
		marginLeft: 20,
		fontWeight: 'bold',
		fontSize: 14,
		color: '#25b5e9'
	},
	customer2: {
		marginBottom: 20,
		marginLeft: 20,
		fontWeight: 'bold',
		fontSize: 14,
		color: '#25b5e9'
	},
	ageHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center'
	},
	genderHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 10,
		textAlign: 'center'
	},
	nextBtnContainer: {
		height: 120,
		justifyContent: 'center'
	}
});

export default CustomerAgeGender;