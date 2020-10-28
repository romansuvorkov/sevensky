import React from 'react';
import './App.css';
import DataProvider from './components/DataProvider';
import FirstFloor from './components/FirstFloor';
import OrderList from './components/OrderList';
import Interface from './components/Interface';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <OrderList />
        <FirstFloor />
        <Interface />
      </div>
    </DataProvider>
  );
}

export default App;
