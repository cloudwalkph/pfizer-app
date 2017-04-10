import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';

let stresstabImg = require('./img/Stresstabs.jpg');
let stresstabImg2 = require('./img/Stresstabs-2.jpg');
let pagod = require('./img/pAGOD.png');
let pressure = require('./img/Pressure.png');
let puyat = require('./img/Puyat.png');
let { height, width } = Dimensions.get('window');

class Stresstabs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imgDynamic:stresstabImg,
			imgOpacity: 1,
			contentToShow: 0
		}
	}

	onPressBulb() {
		this.setState({
			imgOpacity: 0,
			imgDynamic: stresstabImg2,
			contentToShow: 1
		});
	}

	render() {
		const { navigate } = this.props.navigation;

		return(
			<Image source={this.state.imgDynamic} style={[styles.flex1,{height: height - 80,width: width}]}>
				<Image source={pagod} style={{width: 220,height: 150,position: 'absolute',right: 50,top: 10,opacity:this.state.imgOpacity}}></Image>
				<Image source={puyat} style={{width: 220,height: 150,position: 'absolute',left: 50,opacity:this.state.imgOpacity}}></Image>
				<Image source={pressure} style={{width: 220,height: 170,position: 'absolute',left: 60,top: 200,opacity:this.state.imgOpacity}}></Image>
				<View style={[styles.flex1,styles.flexDirectionRow,{top: 400}]}>
					<View style={{width:120,marginRight: 10,marginLeft: 100}}>
						<TouchableOpacity onPress={this.onPressBulb.bind(this)} activeOpacity={0.7} style={{justifyContent: 'center',alignItems: 'center',padding:10,backgroundColor: '#25b5e9'}}>
							<Image
								style={{width:70,height:70}}
								source={require('../../Illness/Cough/img/light_bulb.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={{width:500,marginLeft: 10,marginTop: 25}}>
						<Text style={styles.headerText}>TAKE STRESSTABS</Text>
					</View>
					
				</View>

				<View style={{width:390,alignSelf:'center',bottom: 130}}>
					<Text style={[styles.contentText,{opacity: this.state.imgOpacity}]}>Puyat, Pagod and Pressure leads to stress that shows in your face</Text>
					<Text style={[styles.contentText,{opacity: this.state.contentToShow}]}>Fight stress with proper exercise, a healthy diet and Stresstabs.</Text>
				</View>

				<TouchableOpacity onPress={() => navigate('RecommendStresstabs')} style={{height: 60,backgroundColor: 'red',justifyContent:'center'}} activeOpacity={0.7}>
				    <Text style={{fontWeight:'bold',color: '#fff',marginRight: 20,textAlign:'center'}}>NEXT</Text>
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
		fontSize:26,
		fontWeight: 'bold'
	},
	contentText: {
		fontSize:20,
		textAlign:'center'
	}

});

export default Stresstabs;