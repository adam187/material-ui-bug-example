import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import IconMenuExampleScrollable from './IconMenuExampleScrollable';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
              <IconMenuExampleScrollable />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
