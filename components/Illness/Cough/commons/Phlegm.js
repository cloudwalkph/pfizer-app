import React, { Component, PropTypes } from 'react';
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

class Phlegm extends Component {
	constructor(props) {
		super(props)
	}

	static propTypes = {
		image: PropTypes.any.isRequired
	}

	setDropZoneValues = (event) => {
		this.props.getDropZone(event.nativeEvent.layout, this.props.imageCount)
	}

	render() {
		
		if(!this.props.showImage)
		{
			return null
		}

			return(
				<Image 
					onLayout={this.setDropZoneValues}
					source={this.props.image} 
					style={this.props.stylePosition}/>
			)
	}
}

export default Phlegm;