import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import GestureView from '../../../GestureView';

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
			transValue: 1,
			direction: null, clicks: 0, distance: 0, angle: 0
		}
	}

	onSlide = (distance, angle) => {
		let one = this.state.transValue;
		this.setState({
			transValue: one - 0.05
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return(
			
				<Image source={this.state.imgDynamic} style={{height: height,width: width}}>
					<Image source={this.state.imgTransparent} style={{height: height,width: width,opacity: this.state.transValue}}/>

					<TouchableOpacity onPress={() => navigate('RecommendedCentrum')} style={{height: 60,width: width, bottom: 80,position: 'absolute',justifyContent: 'center',zIndex:3}} activeOpacity={0.7}>
					    <Text style={{fontSize: 25,fontWeight:'bold',color: '#000',marginRight: 20,textAlign: 'center'}}>NEXT</Text>
					</TouchableOpacity>
					<GestureView
						style={styles.gestureContainer}
						onSwipeRight={(distance, angle) => this.setState({ direction: 'right', distance, angle })}
						onSwipeLeft={(distance, angle) => this.setState({ direction: 'left' })}
						onSwipeUp={(distance, angle) => this.setState({ direction: 'up', distance, angle })}
						onSwipeDown={(distance, angle) => this.setState({ direction: 'down', distance, angle })}
						onUnhandledSwipe={(distance, angle) => this.setState({ direction: 'none', distance, angle })}
						onSwipeMoving={this.onSlide}
						>
					</GestureView>
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
	},
	gestureContainer: {
		top: 1,
		position: 'absolute',
		zIndex: 2,
		width: width,
		height: height
	}

});

export default CentrumHealthy;