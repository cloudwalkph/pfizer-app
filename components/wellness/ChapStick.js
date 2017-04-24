import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
	PanResponder,
	Animated
} from 'react-native';

var gray_button = require('../../assets/img/gray_button.png');
var blue_button = require('../../assets/img/blue_button.png');
let imgBackground = require('./img/Chapstick.jpg');
let lipsCrackImg = require('./img/Chapped-Lips.png');
let lipsImg = require('./img/Lips.png');
let bulbButton  = require('../Illness/Cough/img/light_bulb.png');
let { height, width } = Dimensions.get('window');
let chapstickPen = require('./img/Chapstick.png');

class ChapStick extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic : imgBackground,
			lipsCrackImg,
			lipsImg,
			actionButton: gray_button,
			chapstickOpac: 0,
			lipsOpac: 1,
			dropZone: null,
			pan: new Animated.ValueXY({
				x: 400,
				y: 320
			})
		}
		this.previousLeft = 400;
		this.previousTop = 320;

		this.panResonder = PanResponder.create({
			onStartShouldSetPanResponder    : () => true,
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			
			onPanResponderMove: this.handleResponderMove,
			onPanResponderRelease           : (e, gesture) => {
            	let gX = gesture.dx;
            	let gY = gesture.dy;

                this.state.pan.setValue({x:gX,y:gY});
            },
			onPanResponderGrant	: (e, gesture) => { // on beginning touch
            	
            	gesture.dx = this.previousLeft;
            	gesture.dy = this.previousTop;
            	
            }
		});
	}

	handleResponderMove = (e, gesture) => {
		let gX = gesture.dx;
        let gY = gesture.dy;
        let dz = this.state.dropZone;

        this.previousLeft = gX;
        this.previousTop =  gY;
        this.state.pan.setValue({x:gX,y:gY});
        
        if((gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width))
        {
        	let opac = this.state.lipsOpac;
	       	
	        this.setState({
	        	lipsOpac: opac - 0.1
	        });
        }
        
	}

	getDropZone = (event) => {
		this.setState({dropZone:event.nativeEvent.layout})
	}

	onPressBulb() {
		this.setState({
			chapstickOpac: 1,
			actionButton: blue_button
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return(
			<Image source={this.state.imgDynamic} style={[styles.flex1,{height: height - 80,width: width}]}>
				<Image source={this.state.lipsImg} style={{position:'absolute',top: 170,alignSelf:'center',width: 510,height: 210}}></Image>
				<Image 
					onLayout={this.getDropZone}
					source={this.state.lipsCrackImg} 
					style={{position:'absolute',top: 170,alignSelf:'center',width: 510,height: 210,opacity: this.state.lipsOpac}}/>
				<Animated.Image 
					{...this.panResonder.panHandlers}
					source={chapstickPen} 
					style={[this.state.pan.getLayout(),{position:'absolute',width: 200,height: 130,opacity: this.state.chapstickOpac}]}/>
				<View style={{width: width - 80,alignSelf: 'center',top: 560}}>
					<Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 17}}>Exposure to the sun and weather takes moisture away from your lips causing it to dry.</Text>
					<Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 17}}>Dryness leads to chapped lips</Text>
				</View>
				<View style={{position:'absolute', bottom: 300,alignSelf: 'center'}}>
					<TouchableOpacity onPress={this.onPressBulb.bind(this)}>
						<Image
							source={this.state.actionButton}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigate('RecommendChapstick')} style={{height: 60,backgroundColor: 'red',justifyContent: 'center',position: 'absolute',bottom: 0,width: width}} activeOpacity={0.7}>
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