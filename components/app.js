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
import Caltrate from './wellness/bone_health/Caltrate';
import RecommendCaltrate from './wellness/bone_health/Caltrate/RecommendCaltrate';
import CaltrateAnimation from './wellness/bone_health/Caltrate/CaltrateAnimation';

import Wellness from './wellness';
import Health from './health';
import Pedia from './pedia';

var Advil = require('./health/advil');
var AdvilGame = require('./health/advil/game');
var AdvilMedicine = require('./health/advil/medicine');

var { AdvilSuspension1 } = require('./pedia/advil');
var { Clusivol, Clusivol1 } = require('./pedia/clusivol');
var { Dimetapp1 } = require('./pedia/dimetapp');
var { Incremin1 } = require('./pedia/incremin');
var { Loviscol1 } = require('./pedia/loviscol');
var Robikids = require('./pedia/robikids');
var Robikids1 = require('./pedia/robikids/medicine');

var CustomerDetails = require('./customer_details');

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

    advil: { screen: Advil },
    advilGame: { screen: AdvilGame },
    advilMedicine: { screen: AdvilMedicine },

    advilSuspensionMedicine: { screen: AdvilSuspension1 },
    clusivol: { screen: Clusivol },
    clusivolMedicine: { screen: Clusivol1 },
    dimetappMedicine: { screen: Dimetapp1 },
    increminMedicine: { screen: Incremin1 },
    loviscolMedicine: { screen: Loviscol1 },
    robikids: { screen: Robikids },
    robikidsMedicine: { screen: Robikids1 },

    cough: { screen: Cough },
    viewport: { screen: Viewport },
    robiMedicine: { screen: RobitussinMedicine },
    ChapStick: { screen: ChapStick },
    RecommendChapstick: { screen: RecommendChapstick },
    Stresstabs: { screen: Stresstabs },
    RecommendStresstabs: { screen: RecommendStresstabs },
    Centrum: { screen: Centrum },
    CentrumHealthy: { screen: CentrumHealthy },

    RecommendedCentrum: { screen: RecommendedCentrum },
    Caltrate: { screen: Caltrate },
    RecommendCaltrate: { screen: RecommendCaltrate },
    CaltrateAnimation: { screen: CaltrateAnimation },

    CustomerDetails: { screen: CustomerDetails },
  }
);

module.exports = PfizerApp;