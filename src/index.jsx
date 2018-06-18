import firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebaseConfig from './store/firebase/config';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { checkLoggedUser } from './store/firebase/auth';
import LoadingStateComponent from './components/LoadingStateComponent';
import { getUser } from './store/firebase/database';
import { logIn } from './store/actions/user';

import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/styles/style.scss';

firebase.initializeApp(firebaseConfig);

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

checkLoggedUser()
  .then((id) => getUser(id))
  .then(user => store.dispatch(logIn(user)))
  .then(() => {
    ReactDOM.render(
      jsx,
      document.querySelector('#app')
    );
  });

ReactDOM.render(
  <LoadingStateComponent />,
  document.querySelector('#app')
);