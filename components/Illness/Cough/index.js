import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	Image
} from 'react-native';

class Cough extends Component {
	render() {
		return(
			<Image source={require('../../../assets/img/cough-bg_1024.jpg')} style={styles.flex1,{height: 830,width: 600}}>
				<View style={styles.flex1,styles.flexDirectionRow}>
					<View style={{flex:1}}>
						<TouchableOpacity activeOpacity={0.7}>
							<Image
								style={styles.button}
								source={require('../../../assets/img/cardiogram.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={{flex:4}}>
						<Text style={styles.headerText}>WHAT CAUSES COUGH?</Text>
						<Text>Respiratory diseases are usually caused by viral or</Text>
						<Text>bacterial infections. Phlegm fills up the air passages</Text>
						<Text>that causes coughing.</Text>
					</View>
				</View>
				<View style={{flex:2}}>
					<Image source={require('../../../assets/img/coughing_man.png')} style={{height: 500,width: 500,alignSelf: 'center'}}/>
					
				</View>
				<View style={{flex:2}}>
					<Image source={require('../../../assets/img/cough_boarder_1024.png')} style={{height: 390,width: 600,marginTop:100}}/>
					
				</View>
				<View style={{flex:2}}>
					<TouchableOpacity style={{height: 60,justifyContent: 'center',alignItems: 'flex-end',marginTop: 170}} activeOpacity={0.7}>
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