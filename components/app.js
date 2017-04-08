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

import Wellness from './wellness';
import Health from './health';
import Pedia from './pedia';

import Pain from './health/pain';
import PainInteract from './health/pain/painInteract';

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

const PfizerApp = StackNavigator(
  {

    home: {
      screen: Home,
      navigationOptions: {
        header: {
          visible: false
        },
      },
    },
    customerAgeGender: {
      screen: CustomerAgeGender,
    },
    menu: { screen: Menu },
    wellness: { screen: Wellness },
    health: {
      screen: Health,
      navigationOptions: {
        header: {
          title: 'Health'
        }
      },
    },
    pedia: { screen: Pedia },

    pain: { screen: Pain },
    painInteract: { screen: PainInteract },
  }
);

module.exports = PfizerApp;