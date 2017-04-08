import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Animated,
	PanResponder
} from 'react-native';

class Cough extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bottle: 'none',
			showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
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
		

		return(
			<Image source={require('../../../assets/img/cough-bg_1024.jpg')} style={[styles.flex1,{height: 830,width: 600}]}>
				<View style={[styles.flex1,styles.flexDirectionRow]}>
					<View style={{width:120,marginRight: 10,marginLeft: 50}}>
						<TouchableOpacity onPress={this.onPressBulb.bind(this)} activeOpacity={0.7} style={{justifyContent: 'center',alignItems: 'center',padding:10,backgroundColor: '#25b5e9'}}>
							<Image
								style={{width:70,height:70}}
								source={require('../../../assets/img/light_bulb.png')}
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
				<View style={{flex:1}}>
					<Image source={require('../../../assets/img/coughMan.png')} style={{height: 500,width: 500,alignSelf: 'center',marginTop:20}}/>
					
				</View>
				<View style={{flex:1}}>
					<Image source={require('../../../assets/img/cough_boarder_1024.png')} style={{height: 390,width: 600,marginTop:190}}/>
					
				</View>
				<View style={{flex:1}}>
					<Image source={require('../../../assets/img/lungs.png')} style={{height: 250,width: 250,alignSelf: 'center',marginTop: -50}}/>
					
				</View>
				<Animated.View style={{opacity : this.animatedValue,flex:1,position: 'relative'}}>
					<Text style={{color: '#fff',position:'absolute',bottom: 20,left:30}}>Drag the Robitussin bottle around the lungs to eliminate the phlegm</Text>
					<Animated.View
						{...this.panResponder.panHandlers}
						style={this.state.pan.getLayout()}>
						<Image source={require('../../../assets/img/robiBottle.png')} style={{height: 180,width: 70,position:'absolute',right:15}}/>
					</Animated.View>
				</Animated.View>
				<View style={{flex:1}}>
					<TouchableOpacity style={{height: 60,justifyContent: 'center',alignItems: 'flex-end',marginTop: 50}} activeOpacity={0.7}>
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