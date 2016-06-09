/**
 * Created by shatyajeet on 07/06/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './config/routes';

class DiscUsApp extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

ReactDOM.render(<DiscUsApp />, document.getElementById('app'));
