import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';

import Slider from 'react-native-slider';

let imgBackground = require('./img/caltrate-1.jpg');
let imgDark = require('./img/caltrate-2.jpg');
let { height, width } = Dimensions.get('window');

class Caltrate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic: imgBackground,
			imgDarkDynamic: imgDark,
			opac:0
		}
		
	}

	componentDidMount() {
		this.setState({
			opac: 0
		})
	}

	onChangeValue = (value) => {
		let op = this.state.opac;
		this.setState({
			opac: value
		})
	}

	render() {
		const { navigate } = this.props.navigation;

		return(
			<Image source={this.state.imgDynamic} style={{height: height,width: width}}>
				<Image source={this.state.imgDarkDynamic} style={{height: height,width: width, opacity: this.state.opac}}/>
				<View style={styles.sliderContainer}>
					
					<Slider
						style={{height: 80,width: width - 200}}
						thumbStyle={{height: 30,width: 30,top: 45,borderRadius: 50}}
						trackStyle={{height: 10,borderRadius: 50}}
						value={this.state.opac}
						minimumValue={0}
						maximumValue={1}
						onValueChange={this.onChangeValue}
						onSlidingComplete={(value) => value == 1 ? navigate('CaltrateAnimation') : null} />

					<Text style={styles.ageStart}>30</Text>
					<Text style={styles.ageEnd}>50</Text>
					<Text style={{fontSize: 25,textAlign: 'center',fontWeight: 'bold',bottom: 20}}>AGE</Text>
				</View>
			</Image>
		)
	}
}

const styles = StyleSheet.create({
	sliderContainer : {
		bottom: 70,
		position: 'absolute',
		alignSelf: 'center'
	},
	ageStart: {
		left: 1,
		position: 'absolute',
		fontSize: 20,
		fontWeight: 'bold'
	},
	ageEnd: {
		right: 1,
		position: 'absolute',
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default Caltrate;