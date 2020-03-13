import React from 'react';
import './App.css';
import Home from './component/Home';
import Add from './component/Add';
import Table from './component/Table';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/Add" render={props => <Add {...props} />} />
        <Route path="/Table" render={props => <Table {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
