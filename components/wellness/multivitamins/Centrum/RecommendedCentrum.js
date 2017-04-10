import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

let robi2 = require('./img/Centrum-3.jpg');
let robi3 = require('./img/Centrum-4.jpg');
let { height, width } = Dimensions.get('window');

class RecommendedCentrum extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Swiper style={styles.wrapper} height={height} horizontal={true}>
				<Image source={robi2} style={styles.flex1,{height: height - 80,width: width}}>
					<TouchableOpacity style={styles.recommendButton} activeOpacity={0.7}>
						<Text style={styles.recommendText}>RECOMMEND</Text>
					</TouchableOpacity>
				</Image>
				<Image source={robi3} style={styles.flex1,{height: height - 80,width: width}}>
					<TouchableOpacity style={styles.recommendButton} activeOpacity={0.7}>
						<Text style={styles.recommendText}>RECOMMEND</Text>
					</TouchableOpacity>
				</Image>
			</Swiper>
		)
	}
}


const styles = StyleSheet.create({
	flex1: {
		flex: 1
	},
	recommendButton: {
		height: 60, 
		width: 300, 
		marginTop: 10,
		backgroundColor: '#25b5e9',
		justifyContent: 'center',
		alignSelf: 'center',
		position: 'absolute',
		bottom: 150,
		borderRadius: 5
	},
	recommendText: {
		alignSelf: 'center',
		fontSize: 20
	},
	backgroundImage: {
		height: height,
		width: width
	}
});

export default RecommendedCentrum;