import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './Reducers';

const devtools = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, devtools);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
