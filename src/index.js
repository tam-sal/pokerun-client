import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/store/store'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>

    <React.Fragment>
      <Router>
        <App />
      </Router>
    </React.Fragment>

  </Provider>
);

