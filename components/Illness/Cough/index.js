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

let coughBackImage = require('./img/cough_720.jpg');
let coughBackImageOk = require('./img/cough-2_720.jpg');
let { height, width } = Dimensions.get('window');

class Cough extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bottle: 'none',
			showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY(),
            imageDynamic : coughBackImage
		}

		this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
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
        });
	}

	isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        if(!dz)
        {
        	return;
        }
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    setDropZoneValues(event){
        this.setState({
            dropZoneValues : event.nativeEvent.layout
        });
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

		return(
			<Image source={this.state.imageDynamic} style={[styles.flex1,{height: height - 80,width: width}]}>
				<View style={[styles.flex1,styles.flexDirectionRow]}>
					<View style={{width:120,marginRight: 10,marginLeft: 50}}>
						<TouchableOpacity onPress={this.onPressBulb.bind(this)} activeOpacity={0.7} style={{justifyContent: 'center',alignItems: 'center',padding:10,backgroundColor: '#25b5e9'}}>
							<Image
								style={{width:70,height:70}}
								source={require('./img/light_bulb.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={{width:500,marginLeft: 10}}>
						<Text style={styles.headerText}>WHAT CAUSES COUGH?</Text>
						<Text>Respiratory diseases are usually caused by viral or</Text>
						<Text>bacterial infections. Phlegm fills up the air passages</Text>
						<Text>that causes coughing.</Text>
					</View>
				</View>
				<Animated.View style={{opacity : this.animatedValue,position: 'absolute', bottom: 100, left: 30}}>
					<Text style={{color: '#fff'}}>Drag the Robitussin bottle around the lungs to eliminate the phlegm</Text>
				</Animated.View>
				<Animated.View
					{...this.panResponder.panHandlers}
					style={[this.state.pan.getLayout(),{opacity : this.animatedValue,flex:1}]}>
					<Image source={require('./img/light_bulb.png')} style={{height: 180,width: 70,position:'absolute',right:15,bottom: 60}}/>
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