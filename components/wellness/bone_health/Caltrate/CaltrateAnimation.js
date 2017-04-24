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
let vitamins2 = require('./img/copper.png');
let vitamins3 = require('./img/Magnesium.png');
let vitamins4 = require('./img/Manganese.png');
let vitamins5 = require('./img/Vitamin-D3.png');
let vitamins6 = require('./img/Zinc.png');

class CaltrateAnimation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgDynamic: img1,
			vitaminsCount: 0,
			dropZoneValue: null,
			showDraggable: true,
			showDraggableVita2: true,
			showDraggableVita3: true,
			showDraggableVita4: true,
			showDraggableVita5: true,
			showDraggableVita6: true,
			pan: new Animated.ValueXY({x:80,y:100}),
			panVita2: new Animated.ValueXY({x:40,y:300}),
			panVita3: new Animated.ValueXY({x:80,y:500}),
			panVita4: new Animated.ValueXY({x:440,y:500}),
			panVita5: new Animated.ValueXY({x:460,y:300}),
			panVita6: new Animated.ValueXY({x:440,y:100})
		}

		this.previousLeftVita1 = 80;
		this.previousTopVita1 = 100;

		this.previousLeftVita2 = 40;
		this.previousTopVita2 = 300;

		this.previousLeftVita3 = 80;
		this.previousTopVita3 = 500;

		this.previousLeftVita4 = 440;
		this.previousTopVita4 = 500;

		this.previousLeftVita5 = 460;
		this.previousTopVita5 = 300;

		this.previousLeftVita6 = 440;
		this.previousTopVita6 = 100;
		
		// vitamins 1
		this.panResponder = this.panHandleResponder(this.state.pan,this.previousLeftVita1,this.previousTopVita1, {showDraggable: false});
		this.panResponderVita2 = this.panHandleResponder(this.state.panVita2,this.previousLeftVita2,this.previousTopVita2, {showDraggableVita2: false});
		this.panResponderVita3 = this.panHandleResponder(this.state.panVita3,this.previousLeftVita3,this.previousTopVita3, {showDraggableVita3: false});
		this.panResponderVita4 = this.panHandleResponder(this.state.panVita4,this.previousLeftVita4,this.previousTopVita4, {showDraggableVita4: false});
		this.panResponderVita5 = this.panHandleResponder(this.state.panVita5,this.previousLeftVita5,this.previousTopVita5, {showDraggableVita5: false});
		this.panResponderVita6 = this.panHandleResponder(this.state.panVita6,this.previousLeftVita6,this.previousTopVita6, {showDraggableVita6: false});
	}

	panHandleResponder = (pan,left,top, showCount) => {

		return PanResponder.create({
			onStartShouldSetPanResponder 	: () => true,
			onPanResponderMove 				: Animated.event([null, {
				dx : pan.x,
				dy : pan.y
			}]),

			onPanResponderRelease        	: (e, gesture) => {
				if(this.isDropZone(gesture)){ 
					let count = this.state.vitaminsCount;
	                this.setState(showCount);
	                this.setState({
	                	vitaminsCount: count + 1
	                },() => {
	                	const { navigate } = this.props.navigation;
	                	if(this.state.vitaminsCount == 6){
	                		navigate('RecommendCaltrate');
	                	}
	                });
	            }else{
	                Animated.spring(
	                    pan,
	                    {toValue:{x:left,y:top}}
	                ).start();
	            }
			},
			onPanResponderGrant	: (e, gesture) => { // on beginning touch
            	
            	gesture.dx = left;
            	gesture.dy = top;
            	
            }
		});
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

	render() {

		return(
			<Animated.Image source={this.state.imgDynamic} style={{height: height,width: width}}>
				<View
					onLayout={this.setDropZoneValues}
					style={styles.dropZone}>
					
				</View>
				{this.renderDraggableVita1()}
				{this.renderDraggableVita2()}
				{this.renderDraggableVita3()}
				{this.renderDraggableVita4()}
				{this.renderDraggableVita5()}
				{this.renderDraggableVita6()}
			</Animated.Image>
		)
	}

	renderDraggableVita1 = () => {
		if(this.state.showDraggable) {
			return(
				<Animated.Image 
					{...this.panResponder.panHandlers}
					source={vitamins1} 
					style={[this.state.pan.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	renderDraggableVita2 = () => {
		if(this.state.showDraggableVita2) {
			return(
				<Animated.Image 
					{...this.panResponderVita2.panHandlers}
					source={vitamins2} 
					style={[this.state.panVita2.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	renderDraggableVita3 = () => {
		if(this.state.showDraggableVita3) {
			return(
				<Animated.Image 
					{...this.panResponderVita3.panHandlers}
					source={vitamins3} 
					style={[this.state.panVita3.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	renderDraggableVita4 = () => {
		if(this.state.showDraggableVita4) {
			return(
				<Animated.Image 
					{...this.panResponderVita4.panHandlers}
					source={vitamins4} 
					style={[this.state.panVita4.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	renderDraggableVita5 = () => {
		if(this.state.showDraggableVita5) {
			return(
				<Animated.Image 
					{...this.panResponderVita5.panHandlers}
					source={vitamins5} 
					style={[this.state.panVita5.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}

	renderDraggableVita6 = () => {
		if(this.state.showDraggableVita6) {
			return(
				<Animated.Image 
					{...this.panResponderVita6.panHandlers}
					source={vitamins6} 
					style={[this.state.panVita6.getLayout(), {position:'absolute',height:100,width:100}]}>
				</Animated.Image>
			)
		}
	}
}

const styles = StyleSheet.create({
	dropZone: {
		height: 340,
		width: 50,
		borderRadius: 50,
		position: 'absolute',
		top: 180,
		left: 290
	}
})

export default CaltrateAnimation;