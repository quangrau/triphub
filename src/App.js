import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Root from 'pages/root';

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <Router>
          <Root />
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
