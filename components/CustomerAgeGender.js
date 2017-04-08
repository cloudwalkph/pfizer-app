import React, { Component } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Image
} from 'react-native';

var customer = [
	{
		label: 'customer1',
	},
	{
		label: 'customer2',
	},
]

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
			<View style={styles.container}>
				<Image
					source={require('../imageSrc/bg.jpg')}
					style={styles.backgroundImage}
				>
                    <View style={{height: 20}}>

                    </View>
					{customer.map(function (c, i) {
						return (
							<View key={i} style={styles.container}>
								<Text style={styles.customer}>CUSTOMER 1</Text>
								<Text style={styles.ageHeader}>AGE</Text>
								<TextInput
									style={{ alignSelf: 'center', height: 40, borderWidth: 1, width: 50 }}
									keyboardType='numeric'
									onChangeText={(text) => this.setState({ text })}
									value={this.state.text} />
								<Text style={styles.genderHeader}>GENDER</Text >
								<View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 20, marginBottom: 20, width: 270 }}>
									<View style={{ flex: 1 }}>
										<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
											<Text style={{ fontWeight: 'bold', color: '#fff' }}>MALE</Text>
										</TouchableOpacity>
									</View>
									<View style={{ flex: 1 }}>
										<TouchableOpacity style={{ height: 70, backgroundColor: '#25b5e9', justifyContent: 'center', alignItems: 'center', marginLeft: 2 }}>
											<Text style={{ fontWeight: 'bold', color: '#fff' }}>FEMALE</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						)
					}.bind(this))}

					<TouchableOpacity onPress={() => navigate('menu')} style={styles.nextButton} activeOpacity={0.7}>
						<Text style={{ fontWeight: 'bold', color: '#fff' }}>NEXT</Text>
					</TouchableOpacity>

				</Image>
			</View >
		)
	}
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: width,
	},
	nextButton: {
		width: width,
		height: 60,
		marginTop: 10,
		backgroundColor: '#25b5e9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	customer: {
		flex: 1,
		textAlign: 'left',
		fontWeight: 'bold',
		fontSize: 14,
		color: '#25b5e9'
	},
	ageHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	genderHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default CustomerAgeGender;