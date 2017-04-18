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

import Advil from './health/advil';
import AdvilGame from './health/advil/game';
import AdvilRecommend from './health/advil/recommend';
import AdvilCapsule from './health/advil/capsule';

import Robikids from './pedia/robikids';
import RobikidsRecommend from './pedia/robikids/recommend';
import RobikidsMedicine from './pedia/robikids/medicine';

import { AdvilSuspension1, AdvilSuspension2 } from './pedia/advil';
import { Clusivol, ClusivolRecommend, ClusivolMedicine } from './pedia/clusivol';
import { Dimetapp1, Dimetapp2 } from './pedia/dimetapp';
import { Incremin1, Incremin2 } from './pedia/incremin';
import { Loviscol1, Loviscol2 } from './pedia/loviscol';

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
    advilRecommend: { screen: AdvilRecommend },
    advilCapsule: { screen: AdvilCapsule },

    advilSuspensionRecommend: { screen: AdvilSuspension1 },
    advilSuspensionMedicine: { screen: AdvilSuspension2 },
    clusivol: { screen: Clusivol },
    clusivolRecommend: { screen: ClusivolRecommend },
    clusivolMedicine: { screen: ClusivolMedicine },
    dimetappRecommend: { screen: Dimetapp1 },
    dimetappMedicine: { screen: Dimetapp2 },
    increminRecommend: { screen: Incremin1 },
    increminMedicine: { screen: Incremin2 },
    loviscolRecommend: { screen: Loviscol1 },
    loviscolMedicine: { screen: Loviscol2 },
    robikids: { screen: Robikids },
    robikidsRecommend: { screen: RobikidsRecommend },
    robikidsMedicine: { screen: RobikidsMedicine },

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