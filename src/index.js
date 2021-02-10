import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'
import { getAboutList } from './actions/generalSettingsAction';
import { getPrivacyPolicyList } from './actions/generalSettingsAction';
import { getemailsList} from './actions/generalSettingsAction';
import { getSocialAccountList} from './actions/generalSettingsAction';
import { getCurrency} from './actions/generalSettingsAction';
import { getCountry} from './actions/generalSettingsAction';
import { getBannerList} from './actions/BannerAction';

store.dispatch(getPrivacyPolicyList());
store.dispatch(getAboutList());
store.dispatch(getemailsList());
store.dispatch(getSocialAccountList());
store.dispatch(getCurrency());
store.dispatch(getCountry());
store.dispatch(getBannerList());

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
