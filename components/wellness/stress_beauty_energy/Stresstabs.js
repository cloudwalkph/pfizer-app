import React, { Component } from 'react';
import {
	Animated,
	Dimensions,
	Image,
	PanResponder,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from 'react-native';
var clamp = require('clamp');

var { Next } = require('../../commons/buttons');

var gray_button = require('../../../assets/img/gray_button.png');
var blue_button = require('../../../assets/img/blue_button.png');
let stresstabImg = require('./img/Stresstabs.jpg');
let stresstabImg2 = require('./img/Stresstabs-2.jpg');
let pagod = require('./img/pAGOD.png');
let pressure = require('./img/Pressure.png');
let puyat = require('./img/Puyat.png');
let { height, width } = Dimensions.get('window');

let SWIPE_THRESHOLD = 400;

class Stresstabs extends Component {
	constructor(props) {
		super(props)

		this.prevPagodX = 380;
		this.prevPagodY = 10;
		this.prevPuyatX = 40;
		this.prevPuyatY = 0;
		this.prevPressureX = 100;
		this.prevPressureY = 200;

		this.state = {
			actionButton: gray_button,
			imgDynamic: stresstabImg,
			imgOpacity: 0,
			contentToShow: 'Puyat, Pagod and Pressure leads to stress that shows in your face',
			panPagod: new Animated.ValueXY({
				x: this.prevPagodX,
				y: this.prevPagodY,
			}),
			panPuyat: new Animated.ValueXY({
				x: this.prevPuyatX,
				y: this.prevPuyatY,
			}),
			panPressure: new Animated.ValueXY({
				x: this.prevPressureX,
				y: this.prevPressureY,
			}),
			enter: new Animated.Value(0.5)
		}

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

	componentWillMount() {
		this.panPagodResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (evt, gesture) => {
				this.state.panPagod.setOffset({ x: this.state.panPagod.x._value, y: this.state.panPagod.y._value });
				this.state.panPagod.setValue({ x: this.prevPagodX, y: this.prevPagodY });
			},
			onPanResponderMove: Animated.event([null, {
				dx: this.state.panPagod.x,
				dy: this.state.panPagod.y,
			}]),
			onPanResponderRelease: (e, { vx, vy }) => {
				this.state.panPagod.flattenOffset();
				var velocity;

				if (vx >= 0) {
					velocity = clamp(vx, 3, 5);
				} else if (vx < 0) {
					velocity = clamp(vx * -1, 3, 5) * -1;
				}

				if (0 > this.state.panPagod.x._value || Math.abs(this.state.panPressure.x._value) > SWIPE_THRESHOLD) {
					Animated.decay(this.state.panPagod, {
						velocity: { x: velocity, y: vy },
						deceleration: 0.997
					}).start()
				} else {
					Animated.spring(this.state.panPagod, {
						toValue: { x: this.prevPagodX, y: this.prevPagodY },
						friction: 4
					}).start()
				}
			}
		});
		this.panPuyatResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (evt, gesture) => {
				this.state.panPuyat.setOffset({ x: this.state.panPuyat.x._value, y: this.state.panPuyat.y._value });
				this.state.panPuyat.setValue({ x: this.prevPuyatX, y: this.prevPuyatY });
			},
			onPanResponderMove: Animated.event([null, {
				dx: this.state.panPuyat.x,
				dy: this.state.panPuyat.y,
			}]),
			onPanResponderRelease: (e, { vx, vy }) => {
				this.state.panPuyat.flattenOffset();
				var velocity;

				if (vx >= 0) {
					velocity = clamp(vx, 3, 5);
				} else if (vx < 0) {
					velocity = clamp(vx * -1, 3, 5) * -1;
				}

				if (0 > this.state.panPuyat.x._value || Math.abs(this.state.panPuyat.x._value) > SWIPE_THRESHOLD) {
					Animated.decay(this.state.panPuyat, {
						velocity: { x: velocity, y: vy },
						deceleration: 0.997
					}).start()
				} else {
					Animated.spring(this.state.panPuyat, {
						toValue: { x: this.prevPuyatX, y: this.prevPuyatY },
						friction: 4
					}).start()
				}
			}
		});
		this.panPressureResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (evt, gesture) => {
				this.state.panPressure.setOffset({ x: this.state.panPressure.x._value, y: this.state.panPressure.y._value });
				this.state.panPressure.setValue({ x: this.prevPressureX, y: this.prevPressureY });
			},
			onPanResponderMove: Animated.event([null, {
				dx: this.state.panPressure.x,
				dy: this.state.panPressure.y,
			}]),
			onPanResponderRelease: (e, { vx, vy }) => {
				this.state.panPressure.flattenOffset();
				var velocity;

				if (vx >= 0) {
					velocity = clamp(vx, 3, 5);
				} else if (vx < 0) {
					velocity = clamp(vx * -1, 3, 5) * -1;
				}

				if (0 > this.state.panPressure.x._value || Math.abs(this.state.panPressure.x._value) > SWIPE_THRESHOLD) {
					Animated.decay(this.state.panPressure, {
						velocity: { x: velocity, y: vy },
						deceleration: 0.997
					}).start()
				} else {
					Animated.spring(this.state.panPressure, {
						toValue: { x: this.prevPressureX, y: this.prevPressureY },
						friction: 4
					}).start()
				}
			}
		});
	}

	_animateEntrance() {
		Animated.spring(
			this.state.enter,
			{ toValue: 1, friction: 8 }
		).start();
	}

	_onPressBulb() {
		this.setState({
			actionButton: blue_button,
			imgOpacity: 1,
		});
		this._animateEntrance();
	}

	_resetState() {
		this.setState({
			imgDynamic: stresstabImg2,
			contentToShow: 'Fight stress with proper exercise, a healthy diet and Stresstabs.',
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		let { panPagod, panPuyat, panPressure, enter, } = this.state;

		let rotate = panPagod.x.interpolate({ inputRange: [-180, 380, 500], outputRange: ["-30deg", "0deg", "30deg"] });
		let rotatepanPuyat = panPuyat.x.interpolate({ inputRange: [-160, 40, 240], outputRange: ["-30deg", "0deg", "30deg"] });
		let rotatepanPressure = panPressure.x.interpolate({ inputRange: [-100, 100, 300], outputRange: ["-30deg", "0deg", "30deg"] });

		let scale = enter;
		let animatedPagodStyles = { transform: [{ translateX: panPagod.x }, { translateY: panPagod.y }, { rotate }, { scale }] };

		let animatedPuyatStyles = { transform: [{ translateX: panPuyat.x }, { translateY: panPuyat.y }, { rotate: rotatepanPuyat }, { scale }] };
		let animatedPressureStyles = { transform: [{ translateX: panPressure.x }, { translateY: panPressure.y }, { rotate: rotatepanPressure }, { scale }] };


		return (
			<Image source={this.state.imgDynamic} style={styles.backgroundImage}>
				<View style={{ flex: 7 }}>
					<Animated.View
						{...this.panPagodResponder.panHandlers}
						style={[{ position: 'absolute' }, animatedPagodStyles]}
					>
						<Image source={pagod} style={[styles.pagod, { opacity: this.state.imgOpacity }]}></Image>
					</Animated.View>
					<Animated.View
						{...this.panPuyatResponder.panHandlers}
						style={[{ position: 'absolute' }, animatedPuyatStyles]}
					>
						<Image source={puyat} style={[styles.puyat, { opacity: this.state.imgOpacity }]}></Image>
					</Animated.View>
					<Animated.View
						{...this.panPressureResponder.panHandlers}
						style={[{ position: 'absolute' }, animatedPressureStyles]}
					>
						<Image source={pressure} style={[styles.pressure, { opacity: this.state.imgOpacity }]}></Image>
					</Animated.View>
				</View>
				<View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
					<View>
						<TouchableWithoutFeedback onPress={this._onPressBulb.bind(this)}>
							<Image
								source={this.state.actionButton}
							/>
						</TouchableWithoutFeedback>
					</View>
					<View>
						<Text style={styles.headerText}>TAKE STRESSTABS</Text>
					</View>
				</View>

				<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
					<Text style={[{ width: 350 }, styles.contentText]}>{this.state.contentToShow}</Text>
				</View>

				<View style={{ flex: 3 }}>
					<TouchableOpacity onPress={() => navigate('RecommendStresstabs')}>
						<Next></Next>
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
	backgroundImage: {
		height: height - 80,
		width: width,
	},
	headerText: {
		fontSize: 35,
		fontWeight: 'bold'
	},
	contentText: {
		fontSize: 20,
		textAlign: 'center'
	},
	pagod: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
	puyat: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
	pressure: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	}

});

export default Stresstabs;