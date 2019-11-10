import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Home from './home';

class App extends React.Component {
  render() {
    return (
      <div style={{width: '100vw'}}>
        <Home />
      </div>
    );
  }
}



AppRegistry.registerComponent('App', () => App);

export default App;