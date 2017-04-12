import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import { BackArrow } from './commons/back_arrow';
import { BurgerMenu } from './commons/burgerMenu';

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
import Centrum from './wellness/multivitamins/Centrum';
import CentrumHealthy from './wellness/multivitamins/Centrum/CentrumHealthy';
import RecommendedCentrum from './wellness/multivitamins/Centrum/RecommendedCentrum';

import Wellness from './wellness';
import Health from './health';
import Pedia from './pedia';

import Pain from './health/pain';
import PainInteract from './health/pain/painInteract';
import PainRecommends from './health/pain/recommends';

import CoughKids from './pedia/cough';
import CoughKidsRecommend from './pedia/cough/recommend';
import Robikids from './pedia/cough/robikids';

import Advil from './advil';

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
      navigationOptions: {
        header: {
          left: <BackArrow />,
          right: <BurgerMenu />,
          tintColor: 'white',
          style: {
            backgroundColor: '#25b5e9'
          }
        }
      }
    },
    menu: {
      screen: Menu,
      navigationOptions: {
        header: {
          tintColor: 'white',
          style: {
            backgroundColor: '#25b5e9'
          }
        }
      }
    },
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
    painRecommends: { screen: PainRecommends },

    advil: { screen: Advil },

    coughKids: { screen: CoughKids },
    coughKidsRecommend: { screen: CoughKidsRecommend },
    robikids: { screen: Robikids },

    cough: { screen: Cough },
    viewport: { screen: Viewport },
    robiMedicine: { screen: RobitussinMedicine },
    ChapStick: { screen: ChapStick },
    RecommendChapstick: { screen: RecommendChapstick },
    Stresstabs: { screen: Stresstabs },
    RecommendStresstabs: { screen: RecommendStresstabs },
    Centrum: { screen: Centrum },
    CentrumHealthy: { screen: CentrumHealthy },
    RecommendedCentrum: { screen: RecommendedCentrum }
  }, {

  }
);

module.exports = PfizerApp;