import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
	Animated,
	PanResponder,
	Easing
} from 'react-native';

let img1 = require('./img/caltrate-animate.jpg');
let { height, width } = Dimensions.get('window');
let vitamins1 = require('./img/Calcium.png');

class CaltrateAnimation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic: img1,
			dropZoneValue: null,
			showDraggable: true,
			pan: new Animated.ValueXY()
		}
		
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder 	: () => true,
			onPanResponderMove 				: Animated.event([null, {
				dx : this.state.pan.x,
				dy : this.state.pan.y
			}]),
			onPanResponderRelease        	: (e, gesture) => {
				if(this.isDropZone(gesture)){ 
	                this.setState({
	                    showDraggable : false 
	                });
	            }else{
	                Animated.spring(
	                    this.state.pan,
	                    {toValue:{x:0,y:0}}
	                ).start();
	            }
			}
		})
	}

	isDropZone = (gesture) => {     
	    let dz = this.state.dropZoneValues;
	    return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
	}

	setDropZoneValues = (event) => {
	    this.setState({
	        dropZoneValues : event.nativeEvent.layout
	    });
	}

	renderDraggable = () => {
		if(this.state.showDraggable) {
			return(
				<Animated.Image 
					{...this.panResponder.panHandlers}
					source={vitamins1} 
					style={[this.state.pan.getLayout(), {height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	render() {
		return(
			<Animated.Image source={this.state.imgDynamic} style={{height: height,width: width}}>
				<View
					onLayout={this.setDropZoneValues}
					style={styles.dropZone}>
					
				</View>
				{this.renderDraggable()}
			</Animated.Image>
		)
	}
}

const styles = StyleSheet.create({
	dropZone: {
		height: 340,
		width: 40,
		borderRadius: 50,
		position: 'absolute',
		top: 180,
		left: 290
	}
})

export default CaltrateAnimation;