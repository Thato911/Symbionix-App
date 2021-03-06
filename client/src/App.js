import React from 'react';
import AppNavbar from './components/AppNavbar';
import CarList from './components/CarList';
import CarModal from './components/CarModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <CarModal />
          <CarList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
