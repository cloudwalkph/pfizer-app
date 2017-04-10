import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';

let imgBackground = require('./img/Chapstick.jpg');
let lipsCrackImg = require('./img/Chapped-Lips.png');
let lipsImg = require('./img/Lips.png');
let bulbButton  = require('../Illness/Cough/img/light_bulb.png');
let { height, width } = Dimensions.get('window');

class ChapStick extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic : imgBackground,
			lipsCrackImg
		}
	}

	onPressBulb() {
		this.setState({
			lipsCrackImg: lipsImg
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		return(
			<Image source={this.state.imgDynamic} style={[styles.flex1,{height: height - 80,width: width}]}>
				<Image source={this.state.lipsCrackImg} style={{top: 170,alignSelf:'center',width: 510,height: 210}}></Image>
				<View style={{width: width - 80,alignSelf: 'center',top: 200}}>
					<Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 17}}>Exposure to the sun and weather takes moisture away from your lips causing it to dry.</Text>
					<Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 17}}>Dryness leads to chapped lips</Text>
				</View>
				<TouchableOpacity onPress={this.onPressBulb.bind(this)} activeOpacity={0.7} style={{alignSelf: 'center',backgroundColor: '#25b5e9',width: 100,height: 100,postition: 'absolute',top: 300}}>
					<Image
						style={{width:70,height:70,alignSelf: 'center',marginTop: 14}}
						source={bulbButton}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('RecommendChapstick')} style={{height: 60,backgroundColor: 'red',justifyContent: 'center',bottom: -400,width: width}} activeOpacity={0.7}>
				    <Text style={{fontWeight:'bold',color: '#fff',marginRight: 20, textAlign: 'center'}}>NEXT</Text>
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

export default ChapStick;