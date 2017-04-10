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
import Viewport from './Illness/Cough/Viewport';
import RobitussinMedicine from './Illness/Cough/RobitussinMedicine';
import ChapStick from './wellness/ChapStick';
import RecommendChapstick from './wellness/RecommendChapstick';
import Stresstabs from './wellness/stress_beauty_energy/Stresstabs';
import RecommendStresstabs from './wellness/stress_beauty_energy/RecommendStresstabs';

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
    wellness: {
      screen: Wellness,
      navigationOptions: {
        header: {
          title: 'Wellness'
        }
      },
    },
    health: {
      screen: Health,
      navigationOptions: {
        header: {
          title: 'Health'
        }
      },
    },
    pedia: {
      screen: Pedia,
      navigationOptions: {
        header: {
          title: 'Pedia'
        }
      }
    },

    pain: { screen: Pain },
    painInteract: { screen: PainInteract },

    cough: { screen: Cough },
    viewport: { screen: Viewport },
    robiMedicine: { screen: RobitussinMedicine },
    ChapStick: { screen: ChapStick },
    RecommendChapstick: { screen: RecommendChapstick },
    Stresstabs: { screen: Stresstabs },
    RecommendStresstabs: { screen: RecommendStresstabs }
  }
);

module.exports = PfizerApp;