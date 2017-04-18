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

let img1 = require('./img/Caltrate-3.jpg');
let img2 = require('./img/Caltrate-4.jpg');
let { height, width } = Dimensions.get('window');

class RecommendCaltrate extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Swiper style={styles.wrapper} height={height} horizontal={true}>
				<Image source={img1} style={styles.flex1,{height: height - 80,width: width}}>
					<TouchableOpacity style={styles.recommendButton} activeOpacity={0.7}>
						<Text style={styles.recommendText}>NEXT</Text>
					</TouchableOpacity>
				</Image>
				<Image source={img2} style={styles.flex1,{height: height - 80,width: width}}>
					
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
	}
});

export default RecommendCaltrate;