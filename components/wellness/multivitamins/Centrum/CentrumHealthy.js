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

let centrumBackImage  = require('./img/Centrum-2.jpg');
let centrumBackImage1  = require('./img/Centrum-1.jpg');
let { height, width } = Dimensions.get('window');

class CentrumHealthy extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic: centrumBackImage,
			imgTransparent: centrumBackImage1,
			value: 0,
			transValue: 1
		}
	}

	onSlide = (value) => {
		let one = 1;
		this.setState({
			value,
			transValue: one - value 
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return(
			<Image source={this.state.imgDynamic} style={{height: height,width: width}}>
				<Slider
					style={{backgroundColor: 'red',width:450,marginLeft: 24,alignSelf: 'center',top: 300,height: 120,opacity: 1,zIndex: 9,opacity: 0}}
					thumbStyle={{height: 120,width: 100,top:60}}
					trackStyle={{height: 1,width: 1}}
					value={this.state.value}
					onValueChange={this.onSlide} />

				<Image source={this.state.imgTransparent} style={{height: height,width: width,opacity: this.state.transValue,top: -120}}/>

				<TouchableOpacity onPress={() => navigate('RecommendedCentrum')} style={{height: 60,width: width, bottom: 80,position: 'absolute',justifyContent: 'center'}} activeOpacity={0.7}>
				    <Text style={{fontSize: 25,fontWeight:'bold',color: '#000',marginRight: 20,textAlign: 'center'}}>NEXT</Text>
				</TouchableOpacity>
			</Image>
		)
	}
}

const styles = StyleSheet.create({
	flex1: {
		flex: 1
	},
	flexDirectionRow: {
		flexDirection: 'row',
		marginTop: 20
	},
	headerText: {
		fontSize:20,
		fontWeight: 'bold'
	}

});

export default CentrumHealthy;