import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Animated,
	PanResponder,
	Dimensions
} from 'react-native';

import Phlegm from './commons/Phlegm';

let coughBackImage = require('./img/cough_720.jpg');
let coughBackImageOk = require('./img/cough-2_720.jpg');
let phlegm1 = require('./img/phlegm1.png');
let phlegm2 = require('./img/phlegm2.png');
let phlegm3 = require('./img/phlegm3.png');
let phlegm4 = require('./img/phlegm4.png');
let { height, width } = Dimensions.get('window');

class Cough extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bottle: 'none',
			showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY({x:500,y:500}),
            imageDynamic : coughBackImage,
            dropzone1 : true,
            dropzone2 : true,
            dropzone3 : true,
            dropzone4 : true
		}

		this.previousLeft = 500;
		this.previousTop = 500;

		this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            /*onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),*/
            onPanResponderMove              : this.handleResponderMove,

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
        
        this.previousLeft = gX;
        this.previousTop =  gY;
        this.state.pan.setValue({x:gX,y:gY});

        let dz1 = this.state.dropzone1;
        let dz2 = this.state.dropzone2;
        let dz3 = this.state.dropzone3;
        let dz4 = this.state.dropzone4;

        if((gesture.moveY > dz1.y && gesture.moveY < dz1.y + dz1.height) && (gesture.moveX > dz1.x && gesture.moveX < dz1.x + dz1.width))
        {
        	this.setState({
        		dropzone1: false
        	})
        }

        if((gesture.moveY > dz2.y && gesture.moveY < dz2.y + dz2.height) && (gesture.moveX > dz2.x && gesture.moveX < dz2.x + dz2.width))
        {
        	this.setState({
        		dropzone2: false
        	})
        }

        if((gesture.moveY > dz3.y && gesture.moveY < dz3.y + dz3.height) && (gesture.moveX > dz3.x && gesture.moveX < dz3.x + dz3.width))
        {
        	this.setState({
        		dropzone3: false
        	})
        }

        if((gesture.moveY > dz4.y && gesture.moveY < dz4.y + dz4.height) && (gesture.moveX > dz4.x && gesture.moveX < dz4.x + dz4.width))
        {
        	this.setState({
        		dropzone4: false
        	})
        }
      	
	}

	setDropZone = (layout, i) => {
		this.state['dropzone' + i] = layout
	}

	componentWillMount() {
		this.animatedValue = new Animated.Value(0);
	}

	onPressBulb() {
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration:1000
		}).start();
	}

	render() {
		const { navigate } = this.props.navigation;
		// console.warn(this.state.dropzone1,this.state.dropzone2,this.state.dropzone3,this.state.dropzone4);
		return(
			
			<Image source={this.state.imageDynamic} style={{height: height - 80,width: width}}>
				<View style={[styles.flexDirectionRow,{alignSelf: 'center'}]}>
					<View style={{width: 100,marginRight: 10}}>
						<TouchableOpacity onPress={this.onPressBulb.bind(this)} activeOpacity={0.7} style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#25b5e9',padding: 10}}>
							<Image
								style={{width:70,height:70}}
								source={require('./img/light_bulb.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={{width:340}}>
						<Text style={styles.headerText}>WHAT CAUSES COUGH?</Text>
						<Text>Respiratory diseases are usually caused by viral or</Text>
						<Text>bacterial infections. Phlegm fills up the air passages</Text>
						<Text>that causes coughing.</Text>
					</View>
				</View>

				<Phlegm 
					image={phlegm1} 
					stylePosition={{width: 40,height:70,position: 'absolute',left: '40%',bottom: 380}} 
					getDropZone={this.setDropZone} imageCount={1} showImage={this.state.dropzone1} />

				<Phlegm 
					image={phlegm2} 
					stylePosition={{width: 40,height:85,position: 'absolute',left: '35%',bottom: 280}} 
					getDropZone={this.setDropZone} imageCount={2} showImage={this.state.dropzone2} />

				<Phlegm 
					image={phlegm3} 
					stylePosition={{width: 55,height:72,position: 'absolute',left: '54%',bottom: 370}}
					getDropZone={this.setDropZone} imageCount={3} showImage={this.state.dropzone3} />

				<Phlegm 
					image={phlegm4} 
					stylePosition={{width: 70,height:79,position: 'absolute',left: '56%',bottom: 280}}
					getDropZone={this.setDropZone} imageCount={4} showImage={this.state.dropzone4} />

				<Animated.View style={{opacity : this.animatedValue,position: 'absolute', bottom: 100, left: 30}}>
					<Text style={{color: '#fff'}}>Drag the Robitussin bottle around the lungs to eliminate the phlegm</Text>
				</Animated.View>
				<Animated.View
					{...this.panResponder.panHandlers}
					style={[this.state.pan.getLayout(),{height: 120,width: 50,opacity : this.animatedValue}]}>
					
					<Animated.Image
						source={require('./img/robiDmBottle.png')}
						style={[{height: 120,width: 50}]}>
					</Animated.Image>
				</Animated.View>
				<View style={{flex:1}}>
					<TouchableOpacity onPress={() => navigate('robiMedicine')} style={{height: 60,position: 'absolute', bottom: -10,right: 10}} activeOpacity={0.7}>
					    <Text style={{fontWeight:'bold',color: '#fff',marginRight: 20}}>NEXT</Text>
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
	flexDirectionRow: {
		flexDirection: 'row',
		marginTop: 20
	},
	headerText: {
		fontSize:20,
		fontWeight: 'bold'
	}
});

export default Cough;