import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <div id="main-layout">
            <Routes />
          </div>
          <GlobalStyle />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
