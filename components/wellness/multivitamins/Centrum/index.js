import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';

let centrumBackImage  = require('./img/Centrum.jpg');
let { height, width } = Dimensions.get('window');

class Centrum extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic: centrumBackImage
		}
	}

	render() {
		const { navigate } = this.props.navigation;

		return(
			<Image source={this.state.imgDynamic} style={{height: height - 80,width: width}}>
				<TouchableOpacity onPress={() => navigate('CentrumHealthy')} style={{height: 60,width: width, bottom: 1,position: 'absolute',justifyContent: 'center'}} activeOpacity={0.7}>
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

export default Centrum;