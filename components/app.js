import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import CustomerAgeGender from './CustomerAgeGender';
import Menu from './menu';
import Cough from './Illness/Cough';

// var PfizerApp = React.createClass({

//   getInitialState: function () {
//     return {
//       componentSelected: 'home'
//     }
//   },

//   changeComponent: function (component) {
//     this.setState({
//       componentSelected: component
//     })
//   },

//   renderComponent: function (component) {
//     if (component == 'home') {
//       return <Home changeComponent={this.changeComponent} />
//     } else if (component == 'sample') {
//       return <Sample changeComponent={this.changeComponent} />
//     }
//   },

//   render() {
//     return this.renderComponent(this.state.componentSelected);
//   }
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

const PfizerApp = StackNavigator({
  Home: { screen: Home },
  CustomerAgeGender: { screen: CustomerAgeGender },
  Menu: { screen: Menu },
  healthCough: {screen: Cough}
});

module.exports = PfizerApp;